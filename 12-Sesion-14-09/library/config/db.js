const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('library', 'root', 'abcd1234', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos establecida.');
    })
    .catch((error) => {
        console.error('No se pudo conectar a la base de datos:', error);
    });

module.exports = sequelize;