const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRouter =require("./routes/user")
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection successful"))
  .catch((err) => {
    console.log(err);
  });

  app.use("/api/user", userRouter)


app.get("/", (req, res) => {
  res.send("Server is working");
})


const PORT = process.env.PORT || 8000;

app.listen( process.env.PORT || 8000, () => {
  console.log("Backend server is running...");
})
