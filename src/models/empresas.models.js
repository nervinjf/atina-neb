const db = require("../utils/database");
const { DataTypes } = require('sequelize');

const Empresas = db.define('empresa', {
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
    rif: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    razonSocial: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'razon_social',

    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
        }
    },
    email2: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
        }
    },
    phone: {
        type: DataTypes.INTEGER,

    },
    phone2: {
        type: DataTypes.INTEGER,
    },
    direcccion: {
        type: DataTypes.STRING,
    },
    numeroEmpleados: {
        type: DataTypes.INTEGER,
    },
    empleadoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'empleado_id',
    },
    tipoempresa: {
        type: DataTypes.STRING,
    }
});

module.exports = Empresas;