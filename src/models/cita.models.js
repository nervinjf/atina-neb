const db = require("../utils/database");
const { DataTypes } = require('sequelize');

const Cita = db.define('cita', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    peopleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'people_id',
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
    },
    fecha: {
        type: DataTypes.DATE,
    },
    fechaReagendada: {
        type: DataTypes.DATE,
        field: 'fecha_reagendada'
    },
    idioma: {
        type: DataTypes.STRING,
    },
    direccion: {
        type: DataTypes.STRING,
    },
});

module.exports = Cita;