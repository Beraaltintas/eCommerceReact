const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = 5000;
dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected mongo");
  } catch (error) {
    throw error;
  }
};
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/api", (req, res) => {
  res.send("apiroute");
});

app.listen(port, () => {
  connect();
  console.log(`sunucu ${port} portunda`);
});
