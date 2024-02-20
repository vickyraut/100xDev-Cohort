const fs = require("fs");
const { resolve } = require("path");

function vickyReadfile(){
    return new Promise(function (resolve){
        fs.readFile("a.txt", "utf-8", function(err, data){
            resolve(data);
        });
    });
}

function onDone(data){
    console.log(data);
}

vickyReadfile().then(onDone);