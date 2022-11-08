const http = require("http");
const server = http.createServer((req,res)=>{
    if(req.url === "/get2") {
    res.write(JSON.stringify([1, 2, 3, 4, 5]))
    res.end();
    }

    else{
    res.write("  Good Evening ")
    res.end()
    }
})

server.listen(5000,()=>{
    console.log('App is running');
})