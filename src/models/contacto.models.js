const db = require("../utils/database");
const { DataTypes } = require('sequelize');

const Contacto = db.define('contacto', {
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
    origen: {
        type: DataTypes.STRING,
    },
    fuente: {
        type: DataTypes.STRING,
    },
    estatus: {
        type: DataTypes.STRING,
    },
    resultado: {
        type: DataTypes.STRING,
    },
    observacion: {
        type: DataTypes.STRING,
    },
});

module.exports = Contacto;