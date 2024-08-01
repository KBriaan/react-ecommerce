const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection successful"))
  .catch((err) => {
    console.log(err);
  });

  app.get("/api/test", (req, res) => {
    console.log("test is successful");
    res.send("Test is successful");
  });



const PORT = process.env.PORT || 8000;

app.listen( process.env.PORT || 8000, () => {
  console.log("Backend server is running...");
})
