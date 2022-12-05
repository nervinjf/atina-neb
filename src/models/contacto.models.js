const db = require("../utils/database");
const { DataTypes } = require('sequelize');

const Contacto = db.define('contacto', {
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
    origen: {
        type: DataTypes.STRING,
    },
    fuente: {
        type: DataTypes.STRING,
    },
    proposito: {
        type: DataTypes.STRING,
    },
    estatus: {
        type: DataTypes.STRING,
    },
    motivo1: {
        type: DataTypes.STRING,
    },
    motivo2: {
        type: DataTypes.STRING,
    },
    motivo3: {
        type: DataTypes.STRING,
    },
    observacion: {
        type: DataTypes.STRING,
    },
});

module.exports = Contacto;