var fs = require("fs")

var os = require("os")

fs.readFile('./read.txt','utf-8' , function(err,data){ 
    if( err ){
        console.log(err.message);
    }
    else{
        console.log(data)
    }
 })

 fs.readFile('./index.js','utf-8' , function(err,data){ 
    if( err ){
        console.log(err.message);
    }
    else{
        console.log(os.totalmem() )
        console.log(os.freemem() )
    }
 })

console.log("After the reading the file")