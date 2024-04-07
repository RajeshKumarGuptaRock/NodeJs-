const fs = require("fs");
// Create bioData Object
const bioData = {
name : "Rajesh",
Age : 30
};

// Get Object Value
console.log(bioData.name);

//conver object to JSON
const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// convert JSON to object
const objectData = JSON.parse(jsonData);
// console.log(objectData);

//
const JSONData = JSON.stringify(bioData);
// console.log(jsonData);
// fs.writeFile("jsonData.json",jsonData, (err) =>{
//     console.log("Writing done");
// });

fs.readFile("jsonData.json","utf-8",(err, data) =>{
    const objectData = JSON.parse(jsonData);
    console.log(objectData);
});