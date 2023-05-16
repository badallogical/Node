// var m = require("./md1")
// console.log(m.factorical(4))
// console.log("sum is " , m.add(2,4));

const http = require("http")
const port = 3000
const fs = require("fs")

const server = http.createServer( function(req, res){
    res.writeHead( 200, { 'Content-Type' : 'text/html'} )
    fs.readFile('home.html', function(error, data ){
        if( error ){
            res.writeHead(404)
            res.write("error ")
            res.end()
        }else{
            res.end(data)
        }
    })
    // res.write("Hello everyone in backend development")
    // res.end()
})

server.listen(port, function(error){
    if( error ){
        console.log("something went wrong", error)
    }else{
        console.log("Server is listening to port ", port)
    }
})
