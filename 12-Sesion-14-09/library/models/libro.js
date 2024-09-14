const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Libro = sequelize.define('Libro', {
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'libro',
    timestamps: false
});

module.exports = Libro;