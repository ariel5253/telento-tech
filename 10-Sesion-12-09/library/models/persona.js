const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const persona = sequelize.define('persona', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'persona'
});

module.exports = persona;