const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRoute =require("./routes/user")
const authRoute =require("./routes/auth")

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection successful"))
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());

app.use("/api/auth", userRoute);

  app.use("/api/users", userRoute);


app.get("/", (req, res) => {
  res.send("Server is working");
})


const PORT = process.env.PORT || 8000;

app.listen( process.env.PORT || 8000, () => {
  console.log("Backend server is running...");
})
