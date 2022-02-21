const { Sequelize } = require("sequelize");
require("dotenv").config();

module.exports = new Sequelize(
  "d9mre3c2e9qefj",
  "csuerzkmpnetfp",
  "efac5a66eb348cade26cc55ffee1ad921fb85b033313232b8fb7cf3d6ba8b6fd",
  {
    dialect: "postgres",
    port: 5432,
    host: "ec2-44-195-186-235.compute-1.amazonaws.com",
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
