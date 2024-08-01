const router = require("express").Router();

router.get("/usertest", (req, res)=>{
    res.send("user test is successful")
});

router.post("/usersposttest", (req, res)=>{
    const username = req.body.username;
    console.log("your username is:" +username);
});


module.exports= router