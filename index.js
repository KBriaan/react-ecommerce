const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config();

mongoose.connect("mongodb+srv://kbriaan1:chemutai@cluster0.fnvjzai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log("DB Connection successful")).catch((err)=>{console.log(err)})

app.listen(5000, ()=>{
    console.log("Backend server is running...")
});