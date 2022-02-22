const express = require("express");
require("dotenv").config();
// const sequelize = require("./db");
const cors = require("cors");
// const models = require("./models/models");
// const router = require("./routes/index");
// const errorHandler = require("./middleware/ErrorHandlingMiddleware");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello");
});
// app.use("/api", router);

//error processing last middleware
// app.use(errorHandler);

const start = async () => {
  try {
    // await sequelize.authenticate();
    // await sequelize.sync();
    app.listen(PORT, () => console.log(`Server listen on PORT: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
