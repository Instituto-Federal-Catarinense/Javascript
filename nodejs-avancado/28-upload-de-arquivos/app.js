const express = require('express'); const multer = require('multer');
const upload = multer({ dest: 'uploads/', limits: { fileSize: 2 * 1024 * 1024 } }); const app = express();
app.post('/upload', upload.single('arquivo'), (req, res) => res.status(201).json({ nome: req.file.originalname, caminho: req.file.path }));
if (require.main === module) app.listen(3005, () => console.log('Upload em 3005')); module.exports = app;