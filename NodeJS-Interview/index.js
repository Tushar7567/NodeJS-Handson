const express = require("express");

const server = express();

server.get("/", (req,res)=>{
    res.send("Good Night!!!!!!!!!");
})

server.listen(5000,()=>{
    console.log("Server running at PORT 5000");
})