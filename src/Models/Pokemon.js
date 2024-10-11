const { DataTypes } = require('sequelize');
const sequelize = require('.../config/database');

const Pokemon = sequelize.define('Pokemon', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nivel: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = Pokemon;