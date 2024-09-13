const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('movil', 'root', 'abcd1234', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;