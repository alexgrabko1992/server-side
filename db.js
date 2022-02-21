const { Sequelize } = require("sequelize");
require("dotenv").config();

module.exports = new Sequelize(
  "d1vsiend75nbk9",
  "vtarwogxsdozlb",
  "31adbc5aa4ca612cd81e2a245b9cd95321b7fa19996df81fdc5fb2ac9137db9c",
  {
    dialect: "postgres",
    port: "5432",
    host: "ec2-44-199-49-128.compute-1.amazonaws.com",
  }
);

// module.exports = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     dialect: "postgres",
//     port: process.env.DB_PORT,
//     host: process.env.DB_HOST,
//   }
// );
