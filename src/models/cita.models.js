const db = require("../utils/database");
const { DataTypes } = require('sequelize');

const Cita = db.define('cita', {
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
    codigo: {
        type: DataTypes.INTEGER,
    },
    fecha: {
        type: DataTypes.DATE,
    },
    tipo: {
        type: DataTypes.STRING,
    },
    plan: {
        type: DataTypes.STRING,
    },
    // asegurados: {
    //     type: DataTypes.INTEGER,
    // },
    // fPago: {
    //     type: DataTypes.STRING,
    // },
    // efectivo: {
    //     type: DataTypes.STRING,
    // },
    // tiempo: {
    //     type: DataTypes.STRING,
    // },
    // fCliente: {
    //     type: DataTypes.STRING,
    // },
    // fDevolucion: {
    //     type: DataTypes.STRING,
    // },
    // adjunto: {
    //     type: DataTypes.STRING,
    // },
    // poliza: {
    //     type: DataTypes.STRING,
    // },
    // statusSuscripcion: {
    //     type: DataTypes.STRING,
    // },
});

module.exports = Cita;