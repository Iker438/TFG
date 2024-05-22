const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

const server = jsonServer.create();
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

server.use(cors(corsOptions));
server.use(middlewares);

// Usar diferentes rutas para diferentes archivos JSON
server.use('/api/db', routerDb);
server.use('/api/libros', routerLibros);

server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});
