const db = require("../utils/database");
const { DataTypes } = require('sequelize');

const Cotizacion = db.define('cotizacion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    tomadorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'tomador_id',
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
    },
    
});

module.exports = Cotizacion;