const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Libro = require('./Libro');

const Ejemplar = sequelize.define('Ejemplar', {
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    localizacion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    libroId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Libro,
            key: 'id'
        },
        field: 'libro_id'
    }
}, {
    tableName: 'ejemplar',
    timestamps: false
});

// Definir la relación belongsTo con alias 'libro'
Ejemplar.belongsTo(Libro, { foreignKey: 'libroId', as: 'libro' });

module.exports = Ejemplar;