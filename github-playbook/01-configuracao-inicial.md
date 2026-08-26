# Capítulo 01 - Configuração inicial do ambiente

Objetivos deste capítulo: deixar o Git instalado e identificado, autenticar-se no GitHub por chave SSH, entender a diferença entre clone e fork e aplicar as configurações recomendadas para o curso.

## 1. Instalando o Git

### macOS

Opção A (mais simples, usa as ferramentas de linha de comando da Apple):

```bash
xcode-select --install
```

Opção B (com Homebrew):

```bash
brew install git
```

### Linux

Debian/Ubuntu e derivados:

```bash
sudo apt update
sudo apt install git
```

Fedora e derivados:

```bash
sudo dnf install git
```

### Windows

1. Baixe o instalador em https://git-scm.com/download/win;
2. Execute e aceite as opções padrão (já são adequadas);
3. Use o **Git Bash**, instalado junto, para seguir os exemplos deste playbook.

### Verificação

```bash
git --version
```

Se aparecer algo como `git version 2.x.x`, está tudo certo.

## 2. Configuração obrigatória: nome e e-mail

Todo commit guarda o nome e o e-mail de quem o fez. Sem isso, o Git não aceita o commit:

```bash
git config --global user.name "Seu Nome Completo"
git config --global user.email "seu-email@exemplo.com"
```

Regras da turma:

- Use um nome real ou reconhecível, para o histórico da equipe ficar claro;
- Use o mesmo e-mail cadastrado no GitHub: assim suas contribuições aparecem no seu perfil.

Confira o resultado:

```bash
git config user.name
git config user.email
```

## 3. Configuração recomendada

```bash
# Repositorios novos ja nascem com a branch 'main'
git config --global init.defaultBranch main

# Ao dar pull, prefira criar um commit de merge em vez de rebase
# (comportamento padrao do Git; mais previsivel para quem esta comecando)
git config --global pull.rebase false

# Defina um editor para mensagens de commit (exemplo com VS Code)
git config --global core.editor "code --wait"

# Revise tudo que foi configurado
git config --global --list
```

| Configuração | Por quê |
| --- | --- |
| `init.defaultBranch main` | Evita repositórios nascendo com `master`; padroniza com o GitHub |
| `pull.rebase false` | Faz o `git pull` gerar um merge simples; evita surpresas de reescrita de histórico |
| `core.editor` | Abre seu editor ao escrever mensagens longas de commit |

## 4. Chave SSH: acesso sem senha ao GitHub

Com SSH, o GitHub identifica seu computador por um par de chaves criptográficas e você não digita senha a cada `push`.

### Passo 1 - Verifique se você já tem chaves

```bash
ls -al ~/.ssh
```

Se existirem arquivos como `id_ed25519.pub` ou `id_rsa.pub`, pule para o Passo 3.

### Passo 2 - Gere uma nova chave

macOS e Linux:

```bash
# -t ed25519 define o algoritmo moderno; -C rotula a chave com seu e-mail
ssh-keygen -t ed25519 -C "seu-email@exemplo.com"

# Aceite o local padrao (Enter) e, se quiser, defina uma senha para proteger a chave

# Carregue a chave no agente SSH da sessao
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

No macOS, vale também salvar no chaveiro do sistema:

```bash
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

Windows 10/11 (PowerShell com o recurso OpenSSH ativado, ou os mesmos comandos dentro do Git Bash):

```powershell
ssh-keygen -t ed25519 -C "seu-email@exemplo.com"
Get-Service ssh-agent | Set-Service -StartupType Automatic
Start-Service ssh-agent
ssh-add ~\.ssh\id_ed25519
```

### Passo 3 - Copie a chave PÚBLICA

Atenção: copie sempre o arquivo terminado em `.pub` (chave pública). A chave privada (`id_ed25519`) nunca sai do seu computador.

| Sistema | Comando |
| --- | --- |
| macOS | `pbcopy < ~/.ssh/id_ed25519.pub` |
| Linux | `cat ~/.ssh/id_ed25519.pub` e copie a saída manualmente |
| Windows (PowerShell) | `Get-Content ~\.ssh\id_ed25519.pub \| clip` |

### Passo 4 - Cadastre a chave no GitHub

1. Acesse https://github.com/settings/keys;
2. Clique em **New SSH key**;
3. Em *Title*, coloque algo identificável (ex.: `notebook-joao`);
4. Em *Key type*, mantenha **Authentication Key**;
5. Cole o conteúdo copiado no campo *Key*;
6. Clique em **Add SSH key** e confirme sua senha do GitHub se solicitado.

### Passo 5 - Teste a conexão

```bash
ssh -T git@github.com
```

- Na primeira vez, o terminal perguntará se você confia na impressão digital do GitHub; digite `yes`;
- Resposta esperada: `Hi SEU-USUARIO! You've successfully authenticated, but GitHub does not provide shell access.`

Problemas comuns:

| Mensagem | Causa provável | Solução |
| --- | --- | --- |
| `Permission denied (publickey)` | Chave não cadastrada ou agente parado | Refaça os passos 2 a 4; rode `ssh-add` novamente |
| Pedindo usuário/senha no push | Remote configurado em HTTPS | Troque para SSH: `git remote set-url origin git@github.com:usuario/repo.git` |

## 5. Clone versus fork

| Aspecto | Clone direto | Fork + clone |
| --- | --- | --- |
| Onde fica sua cópia | Só no seu computador | No GitHub (sua conta) e no seu computador |
| Quem pode enviar código | Colaboradores convidados no repositório original | Você, no SEU fork; o original recebe via Pull Request |
| Quando usar no curso | Projeto da equipe: todos são colaboradores | Contribuir para projeto de outra pessoa ou projeto open source |

### Clone direto (caso do projeto em equipe)

Quando sua equipe é convidada como colaboradora, clonar direto é suficiente:

```bash
git clone git@github.com:organizacao/projeto-equipe-1.git
cd projeto-equipe-1
```

### Fluxo com fork (contribuição externa)

Use fork quando você NÃO pode escrever no repositório original (por exemplo, projeto de outra turma):

1. Na página do repositório original, clique no botão **Fork**;
2. Clone o SEU fork:

```bash
git clone git@github.com:SEU-USUARIO/projeto-original.git
cd projeto-original

# Registre o repositorio original para buscar atualizacoes dele
git remote add upstream git@github.com:autor-original/projeto-original.git
```

3. Trabalhe em branch, faça push no seu fork e abra um Pull Request para o original.

## 6. Checklist do capítulo

- [ ] `git --version` responde sem erro;
- [ ] `user.name` e `user.email` configurados, com e-mail igual ao do GitHub;
- [ ] `init.defaultBranch` e `pull.rebase` configurados conforme a seção 3;
- [ ] Chave SSH criada e cadastrada no GitHub;
- [ ] `ssh -T git@github.com` exibe a saudação com seu usuário;
- [ ] Sabe explicar quando clonar direto e quando fazer fork.

Próximo capítulo: [02-fluxo-de-trabalho.md](02-fluxo-de-trabalho.md).
