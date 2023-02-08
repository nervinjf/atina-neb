const db = require("../utils/database");
const { DataTypes } = require('sequelize');

const Asegurado = db.define('asegurado', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
    },
    tomadorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'tomador_id',
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ci: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    parentesco:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone1: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone2: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone3: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    address1: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    address2: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    fNacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'f_nacimiento',
    },
    patologia: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    medicamentos: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

module.exports = Asegurado;