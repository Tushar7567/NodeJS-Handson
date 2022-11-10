const express = require("express");

const server = express();

const middleware1 = (req,res,next)=>{
    console.log("middleware-1 for global");
    next();
}
const middleware2 = (req,res,next)=>{
    console.log("middleware-2 ");
    next();
}

server.get('/page1',middleware2,(req,res)=>{
    res.send('Good evening from middleware- 1 and 2')
})

server.get('/page2',middleware1,(req,res)=>{
    res.send('Good evening from middleware-1 ')
})

server.get('/page3',(req,res)=>{
    res.send('Good evening from global middleware')
})

server.listen(5000,()=>{
    console.log('Server running on PORT 5000');
})