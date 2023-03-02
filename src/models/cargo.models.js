const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Cargo = db.define('cargo', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    cargo:{
        type: DataTypes.STRING,
    }
});

module.exports = Cargo;