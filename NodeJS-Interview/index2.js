const express = require("express");

const app = express();

const middleware1 = (req,res,next) =>{
    console.log("Middleware-1");
    next();
}
const middleware2 = (req,res,next) =>{
    console.log("Middleware-2");
    next();
}


app.use(middleware1);

app.get("/page1",(req,res)=>{
    res.send("Middleware-1");
})

app.get("/page2",middleware2,(req,res)=>{
    res.send("Middleware-1 and middleware-2");
})

app.listen(5000,()=>{
    console.log("Server running at PORT 5000");
})