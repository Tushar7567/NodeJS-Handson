const express = require("express");

const server = express();

server.get('/api/main',(req,res)=>{
    res.send('Good evening')
})
server.listen(5000,()=>{
    console.log('Server running on PORT 5000');
})