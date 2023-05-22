const db = require('../../utils/database');
const { DataTypes } = require('sequelize');

const SPersonas = db.define('spersonas', {

    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id"
    },
    firstname:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ci: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    birthdate:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    edad:{
        type: DataTypes.INTEGER,
    },
    sexo:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
    },
    telefono:{
        type: DataTypes.NUMBER,
    },
    producto:{
        type: DataTypes.STRING,
    },
    compania: {
        type: DataTypes.STRING,
    },
    dateCotizacion:{
        type: DataTypes.DATE,
        field: "date_cotizacion"
    },
    tipo:{
        type: DataTypes.STRING,
    },
    captacion:{
        type: DataTypes.STRING,
    },
    agente: {
        type: DataTypes.STRING,
    }
})

module.exports = SPersonas