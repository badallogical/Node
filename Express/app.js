const express = require("express")

// server
const app = express()

// path to resource
var path = 'D:/Work/Backend/Node/Express/public/'

app.use( express.static('public') )  // extra resourse css file

app.set('view engine', 'ejs');
app.set('views', 'D:/Work/Backend/Node/Express/views');

// routes
app.get("/", function(req, res){
    res.sendFile( path + "shopping.html")
})

app.get("/about/:name/:info", function(req, res){
    console.log(req.params.name);
    res.render("index", { myname : req.params.name, info : req.params.info } )
})

app.get("/ext/1", function(req,res){
    res.sendFile( path + "test.html" )
})

app.get("/ext/2", function(req, res){
    res.sendFile( path + "shopping.html" )
})

app.get("/newpage", function(req, res){
    res.sendFile( path + "test2.html")
})

// server started
app.listen(3000, function(error){
    console.log("Server is listening at port " + 3000 )
})


