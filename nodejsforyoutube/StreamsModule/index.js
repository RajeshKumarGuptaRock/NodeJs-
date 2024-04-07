const fs = require("fs");
const http = require("http");

const server = http.createServer();
server.on("request", (req, res) =>{
    /** Without Stream */
    // fs.readFile("help.txt",(err, data) =>{
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // });

    /** Using Stram */
    // const rstream = fs.createReadStream("help.txt");
    
    // rstream.on("data", (chunkdata) => {
    //     res.write(chunkdata);
    // });

    // rstream.on("end", () => {
    //     res.end();
    // });

    // rstream.on("error", (err) => {
    //     console.log(err);
    //     res.end("file not found");
    // });

    /** Using stram with Pipe module */
    const rstream = fs.createReadStream("help.txt");
    rstream.pipe(res);
});

server.listen(8000, "127.0.0.1");