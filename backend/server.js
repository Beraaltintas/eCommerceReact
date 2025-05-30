const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const mainRoute = require("./routes/index.js");
const logger = require("morgan");
const cors = require("cors");
const port = 5000;
const app = express();
dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected mongo");
  } catch (error) {
    throw error;
  }
};
//middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(cors());


app.use("/api", mainRoute);

app.listen(port, () => {
  connect();
  console.log(`sunucu ${port} portunda`);
});
