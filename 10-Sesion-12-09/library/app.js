const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const usuarioRoutes = require('./routes/usuario');
const personaRoutes = require('./routes/persona');

const app = express();

app.use(bodyParser.json());

app.use('/usuarios', usuarioRoutes);
app.use('/personas', personaRoutes);

sequelize.sync()
  .then(() => {
    console.log('Conexión a la base de datos establecida.');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});