/** SOLUÇÃO-MODELO — 03-upload-de-arquivos | Enunciado: exercícios 1 e 2 (+ nomes controlados do 3) de ../03-upload-de-arquivos/exercicios.md | Como rodar: npm install express multer && node app.js
 *
 * Exercício 1 — limite de tamanho: `limits.fileSize` em 1 MB; o Multer lança
 *   MulterError(LIMIT_FILE_SIZE) e o middleware final converte em 400
 *   `{ erro: 'Arquivo maior que 1 MB' }`.
 * Exercício 2 — fileFilter aceita somente image/png, image/jpeg e image/webp;
 *   outros tipos recebem 415 com mensagem clara.
 * Bônus (exercício 3) — diskStorage renomeando para
 *   `<timestamp>-<contador><extensão>`: dois envios do mesmo foto.png NUNCA
 *   se sobrescrevem porque timestamp+contador mudam a cada gravação.
 *
 * Teste com curl (comandos anotados):
 *   dd if=/dev/zero of=grande.png bs=1048576 count=2      # arquivo de 2 MB
 *   curl -i -F "arquivo=@grande.png" http://localhost:3005/upload   # 400
 *   echo teste > texto.txt
 *   curl -i -F "arquivo=@texto.txt" http://localhost:3005/upload    # 415
 *   curl -i -F "arquivo=@foto.png" http://localhost:3005/upload     # 201
 *   ls uploads/                                           # nomes controlados
 */
const path = require('path');
const express = require('express');
const multer = require('multer');

const PASTA_UPLOADS = 'uploads';
const TAMANHO_MAXIMO = 1024 * 1024; // 1 MB (exercício 1)
const MIMES_PERMITIDOS = ['image/png', 'image/jpeg', 'image/webp'];

// Contador incremental garante unicidade mesmo em uploads no mesmo milissegundo.
let contadorUploads = 0;

const armazenamento = multer.diskStorage({
  destination: (req, file, cb) => cb(null, PASTA_UPLOADS),
  filename: (req, file, cb) => {
    contadorUploads += 1;
    const extensao = path.extname(file.originalname).toLowerCase();
    cb(null, `${Date.now()}-${contadorUploads}${extensao}`);
  },
});

const upload = multer({
  storage: armazenamento,
  limits: { fileSize: TAMANHO_MAXIMO },
  fileFilter: (req, file, cb) => {
    if (MIMES_PERMITIDOS.includes(file.mimetype)) {
      return cb(null, true);
    }
    // Erro customizado carregado até o middleware final abaixo.
    return cb(new Error(`Tipo não permitido: ${file.mimetype}`), false);
  },
});

const app = express();
const PORTA = 3005;

app.post('/upload', upload.single('arquivo'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ erro: 'Nenhum arquivo enviado no campo "arquivo"' });
  }
  // Nunca ecoamos originalname como nome FINAL: ele vem do cliente e pode
  // conter caminhos maliciosos ou colidir com arquivos existentes.
  return res.status(201).json({
    nomeSalvo: req.file.filename,
    tamanho: req.file.size,
    mimetype: req.file.mimetype,
  });
});

// Middleware de ERRO (4 argumentos): traduz os erros do Multer/filtro.
app.use((erro, req, res, next) => {
  if (erro instanceof multer.MulterError && erro.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({ erro: 'Arquivo maior que 1 MB' }); // exercício 1
  }
  if (erro instanceof Error && erro.message.startsWith('Tipo não permitido')) {
    return res.status(415).json({ erro: erro.message }); // exercício 2
  }
  console.error(`Erro no upload: ${erro.message}`);
  return res.status(500).json({ erro: 'Erro interno no upload' });
});

if (require.main === module) {
  app.listen(PORTA, () => console.log(`Upload em http://localhost:${PORTA}`));
}

module.exports = app;

// DISCUSSÃO:
// - O limite de tamanho é aplicado PELO SERVIDOR (critério de aceite) — o
//   cliente pode burlar qualquer validação só-front-end.
// - mimetype vem do cabeçalho do multipart: quem quiser validar o CONTEÚDO de
//   verdade deve inspecionar magic bytes ou reprocessar a imagem.
// - LIMIT_UNEXPECTED_FILE (exercício 4) seria mapeado aqui também para uma
//   mensagem amigável quando exceder upload.array('fotos', 5).
