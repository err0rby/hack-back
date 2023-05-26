require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(express.json());
app.use(cors());


app.use(require("./routes/basket.route"));

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGOS);
    console.log("Base");
  } catch (error) {
    console.log("Ошибка базы");
  }
};

app.listen(process.env.PORT, () => {
  console.log("Поднялся");
});

start();
