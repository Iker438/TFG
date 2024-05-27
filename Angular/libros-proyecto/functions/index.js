require('dotenv').config();
const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');

const app = express(); // Usamos 'app' en lugar de 'server' para la instancia de Express
const routerDb = jsonServer.router('db.json'); // Archivo para datos de DB
const routerLibros = jsonServer.router('libros.json'); // Archivo para datos de libros
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, 'src/assets')
});

// Configurar CORS para permitir el encabezado Authorization
const corsOptions = {
  origin: '*',
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS']
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(middlewares);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // Tu correo electrónico de Gmail
    pass: process.env.EMAIL_PASS   // Tu contraseña de Gmail
  }
});

// Endpoint para enviar correos
app.post('/enviar-correo', upload.single('file'), (req, res) => {
  const mailOptions = {
    from: req.body.email,
    to: 'ikergarnica340@gmail.com',  // Correo de destino fijo
    subject: `Contacto: ${req.body.tipo}`,
    text: req.body.mensaje,
    attachments: req.file ? [{ filename: req.file.originalname, content: req.file.buffer }] : []
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

// Endpoint para almacenar libros
app.post('/api/almacen', upload.fields([{ name: 'imagen', maxCount: 1 }, { name: 'pdf', maxCount: 1 }]), (req, res) => {
  const libro = {
    titulo: req.body.titulo,
    genero: req.body.genero,
    descripcion: req.body.descripcion,
    image: req.files['imagen'] ? 'uploads/' + req.files['imagen'][0].filename : null,
    pdf: req.files['pdf'] ? 'uploads/' + req.files['pdf'][0].filename : null
  };

  fs.readFile('almacen.json', (err, data) => {
    if (err && err.code !== 'ENOENT') {
      return res.status(500).send('Error leyendo el archivo');
    }

    const libros = data ? JSON.parse(data) : [];
    libros.push(libro);

    fs.writeFile('almacen.json', JSON.stringify(libros, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error guardando el archivo');
      }
      res.status(200).send('Libro guardado');
    });
  });
});

// Usar diferentes rutas para diferentes archivos JSON
app.use('/api/db', routerDb);
app.use('/api/libros', routerLibros);

app.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});
