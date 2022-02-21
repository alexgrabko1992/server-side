const { Sequelize } = require("sequelize");
require("dotenv").config();

module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "postgres",
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
  }
);

// DB_NAME = recom4u;
// DB_USER = postgres;
// DB_PASSWORD = postgres;
// DB_HOST = localhost;
// DB_PORT = 5432;
