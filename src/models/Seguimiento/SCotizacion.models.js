const db = require('../../utils/database');
const { DataTypes } = require('sequelize');

const SCotizacion =  db.define('scotizacion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    spersonaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'spersona_id',
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
    },
    codigo: {
        type: DataTypes.INTEGER,
    },
    productoc: {
        type: DataTypes.STRING,
    },
    plan: {
        type: DataTypes.STRING,
    },
    asegurados: {
        type: DataTypes.INTEGER,
    },
    poliza: {
        type: DataTypes.STRING,
    },
    statusSuscripcion: {
        type: DataTypes.STRING,
    },
    enviaCotiza: {
        type: DataTypes.BOOLEAN,
        field: 'envia_Cotiza',
        allowNull: false,
        defaultValue: false,
    },
    primaAnual: {
        type: DataTypes.BOOLEAN,
        field: 'prima_Anual',
        allowNull: false,
        defaultValue: false,
    },
})

module.exports = SCotizacion;
