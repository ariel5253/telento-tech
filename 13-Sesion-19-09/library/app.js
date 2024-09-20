const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Importación de cors
const app = express();

const personaRoutes = require('./routes/persona');
const usuarioRoutes = require('./routes/usuario');
const libroRoutes = require('./routes/libro');
const ejemplarRoutes = require('./routes/ejemplar');

// Habilitar CORS para todas las rutas
app.use(cors());

// Middleware para parsear el cuerpo de las peticiones
app.use(bodyParser.json());

// Rutas
app.use('/v1/api/persona', personaRoutes);
app.use('/v1/api/usuario', usuarioRoutes);
app.use('/v1/api/libro', libroRoutes);
app.use('/v1/api/ejemplar', ejemplarRoutes);

const port = process.env.PORT || 9090;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
