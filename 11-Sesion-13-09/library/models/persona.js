const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Persona = sequelize.define('Persona', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    celular: {
        type: DataTypes.STRING,
        allowNull: true
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'persona',
    timestamps: false
});

module.exports = Persona;