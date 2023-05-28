const http = require("http")
const port = 3000
const fs = require("fs")

const server = http.createServer( function(req, res){
    res.writeHead( 200, { 'Content-Type' : 'text/html'} )


    var path = "./view/"

    switch(req.url){
        case "/" : path += 'home.html'
                    break;
        case "/about" : path += 'about.html'
                        break;
        case "/Ext/1" : path += 'Ext/test.html'
                        break;
        case "/Ext/2" : path += 'Ext/shopping.html'
                        break;
        default : path += 'test.html'
    }
    
    
    fs.readFile(path, function(error, data ){
        if( error ){
            res.writeHead(404)
            res.write("<h1>File Not Found</h1>")
            res.end()
        }else{
            res.end(data)
        }
    })

})

server.listen(port, function(error){
    if( error ){
        console.log("something went wrong", error)
    }else{
        console.log("Server is listening to port ", port)
    }
})
