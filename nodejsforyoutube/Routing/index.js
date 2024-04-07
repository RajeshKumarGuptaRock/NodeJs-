const http = require("http");
const server = http.createServer((req, res) => {
    // console.log(req.url);
    if(req.url == "/"){
        res.end("Home Page");
    }else if(req.url == "/about"){
        res.end("About Page");
    }else if(req.url == "/contact"){
        res.end("Contact Page");
    }else{
        //res.write("404 Error Page, Not found");
        // res.end("404 Error Page");
        res.writeHead(404, { "Content-type" : "text/html"});
        res.end("<h1>404 Error Page, Page doesn't exist </h1>");        
    }
    res.end("Server Started");
});


server.listen(8000, "127.0.0.1", () =>{
    console.log("Listening to the port No 8000");
});