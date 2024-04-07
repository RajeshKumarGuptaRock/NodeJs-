
const EventEmitter = require("events");
const event = new EventEmitter();

//Register event
event.on("Hello", (statusCode, msg) =>{
    console.log("Hello");
});

//Register event
event.on("Hello", (statusCode, msg) =>{
    console.log(`Status code is ${statusCode} and the page is ${msg}`);
});

// Create an event emitter instance
event.emit("Hello",200 ,"ok");