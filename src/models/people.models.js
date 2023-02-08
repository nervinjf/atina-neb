const db = require("../utils/database");
const { DataTypes } = require('sequelize');

const People = db.define('people', {
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
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isEmail: true,
        },
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    phone2: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    phone3: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    campana: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = People;