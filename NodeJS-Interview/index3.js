const express = require("express");

const cors = require("cors");
const app = express();


// app.use(cors());

app.get("/input",cors(),(req,res)=>{
    res.send("This is CORS for single route");

})

// app.get("/res",(req,res)=>{
//     res.send("5");

// })

app.listen(5000,()=>{
    console.log("Server running at PORT 5000");
})