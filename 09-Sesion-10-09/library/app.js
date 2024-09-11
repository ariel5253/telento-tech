const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const personaRoutes = require('./routes/persona');
const usuarioRoutes = require('./routes/usuario');

app.use(bodyParser.json());

// Rutas
app.use('/v1/api/persona', personaRoutes);
app.use('/v1/api/usuario', usuarioRoutes);

const port = process.env.PORT || 9090;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});