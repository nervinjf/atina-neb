const db = require("../utils/database");
const { DataTypes } = require('sequelize');

const Tomador = db.define('tomador', {
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
    firstname: {
        type: DataTypes.STRING,
    },
    lastname: {
        type: DataTypes.STRING,
    },
    ci: {
        type: DataTypes.INTEGER,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    phone1: {
        type: DataTypes.STRING,
    },
    phone2: {
        type: DataTypes.STRING,
    },
    phone3: {
        type: DataTypes.STRING,
    },
    address1: {
        type: DataTypes.STRING,
    },
    address2: {
        type: DataTypes.STRING,
    },
    fNacimiento: {
        type: DataTypes.DATEONLY,
        field: "f_nacimiento"
    },
    patologia: {
        type: DataTypes.STRING,
    },
    medicamentos: {
        type: DataTypes.STRING,
    },
});

module.exports = Tomador;

