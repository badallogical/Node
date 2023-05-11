// var m = require("./md1")
// console.log(m.factorical(4))
// console.log("sum is " , m.add(2,4));

const http = require("http")
const port = 8080

const server = http.createServer( function(req, res){
    res.write("Hello everyone in backend development")
    res.end()
})

server.listen(port, function(error){
    if( error ){
        console.log("something went wrong", error)
    }else{
        console.log("Server is listening to port ", port)
    }
})
