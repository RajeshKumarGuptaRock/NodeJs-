const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    const data = fs.readFileSync(`${__dirname}/userData.json`,"utf-8");
 
    // console.log(req.url);
    if(req.url == "/"){
        res.end("Home Page");
    }else if(req.url == "/userapi"){
        res.writeHead(200,{"content-type" : "application/json"});
        const objData1 = JSON.parse(data);
        console.log(objData1[0].id);
        res.write(objData1[0].id);
    }else if(req.url == "/contact"){
        res.end("Contact Page");
    }else{
        res.writeHead(404, { "Content-type" : "text/html"});
        res.end("<h1>404 Error Page, Page doesn't exist </h1>");        
    }
    res.end();
});


server.listen(8000, "127.0.0.1", () =>{
    console.log("Listening to the port No 8000");
});