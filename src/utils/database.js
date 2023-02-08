const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  dialect: "mysql",
  logging: false,
  // dialectOptions: { ssl: { require: false, rejectUnauthorized: false } },
});

module.exports = db;
