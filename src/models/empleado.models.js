const db = require("../utils/database");
const { DataTypes } = require('sequelize');

const Empleado = db.define('empleado', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
    },
    empresaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'empresa_id',
    },
    firstname: {
        type: DataTypes.STRING,
    },
    lastname: {
        type: DataTypes.STRING,
    },
    favorite: {
        type: DataTypes.BOOLEAN,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    cargoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'cargo_id',
    },
})

module.exports = Empleado;