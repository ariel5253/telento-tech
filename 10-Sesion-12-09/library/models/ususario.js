const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Persona = require('./persona');  // Relación con el modelo Persona

const usuario = sequelize.define('usuario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contrasenia: {
    type: DataTypes.STRING,
    allowNull: false
  },
  persona_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Persona,
      key: 'id'
    }
  }
}, {
  tableName: 'usuario'
});

module.exports = usuario;