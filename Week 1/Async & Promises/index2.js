const { log } = require("console");
const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
})

console.log("Hii");

let a = 0;
// takes longer time than file read 
for (let i = 0; i < 100000; i++) {
    a++;
}

console.log("Hi There 2");