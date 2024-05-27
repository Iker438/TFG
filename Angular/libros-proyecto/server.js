const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');
const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const nodemailer = require('nodemailer');

// Inicializa Firebase Admin SDK
const serviceAccount = require('./path/to/your/firebaseConfig.json'); // Cambia esto a la ruta de tu archivo JSON de Firebase

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = express();
const routerDb = jsonServer.router('db.json');
const routerLibros = jsonServer.router('libros.json');
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, 'src/assets')
});

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
    const dir = 'src/assets/almacen/';
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Middleware para verificar el token de Firebase
async function verifyToken(req, res, next) {
  const idToken = req.headers.authorization?.split('Bearer ')[1];
  if (!idToken) {
    return res.status(401).send('Unauthorized');
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).send('Unauthorized');
  }
}

// Endpoint para enviar correos
app.post('/enviar-correo', [verifyToken, upload.single('file')], (req, res) => {
  const userEmail = req.user.email; // Obtiene el email del usuario autenticado

  const mailOptions = {
    from: userEmail, // Correo del usuario autenticado
    to: 'ikergarnica340@gmail.com', // Correo de destino fijo
    subject: `Contacto: ${req.body.tipo}`,
    text: req.body.mensaje,
    attachments: req.file ? [{
      filename: req.file.originalname,
      path: req.file.path
    }] : []
  };

  // Configura el transporter para usar OAuth2
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: userEmail,
      // Para usar OAuth2, necesitas un refresh token y un client ID y secret
      // Estos valores deben ser obtenidos durante el proceso de OAuth2
      // No se incluirán aquí por razones de seguridad
      clientId: 'your-client-id',
      clientSecret: 'your-client-secret',
      refreshToken: 'your-refresh-token',
      accessToken: 'your-access-token' // Obtén el token de acceso dinámicamente
    }
  });

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error al enviar el correo: ' + error.toString());
    }
    res.status(200).send('Correo enviado: ' + info.response);
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
