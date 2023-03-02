const db = require("../utils/database");
const { DataTypes } = require('sequelize');

const CitaEmpresa = db.define('citaempresa', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    empresaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'empresa_id',
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
    },
    empleadoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'empleado_id',
    },
    fecha: {
        type: DataTypes.DATE,
    },
    fechareagendada: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
    },

});

module.exports = CitaEmpresa;