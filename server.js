const http = require("http")

const fs = require('fs')

const server = http.createServer( function( req, res){
    console.log("request made")

    console.log(req.headers)
    res.writeHead(200, { 'Content-Type' : 'text/html'})
    res.write("<h1>Server is responding welcome</h1>")
    res.write("<body><b> My Server </b></body>")
    res.end()
})

const port_number = 3000

server.listen( port_number, 'localhost', function(err){
    if( err ){
        console.log("Something went wrong")
    }
    else{
        console.log("Server is listening")
    }
})