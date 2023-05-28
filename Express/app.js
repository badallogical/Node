const express = require("express")

// server
const app = express()

// path to resource
var path = "D:/Work/Teaching/Backend/Node/view/"

// routes
app.get("/", function(req, res){
    res.sendFile( path + "home.html")
})

app.get("/about", function(req, res){
    res.sendFile(path + "about.html")
})

app.get("/ext/1", function(req,res){
    res.sendFile( path + "Ext/test.html")
})

app.get("/ext/2", function(req, res){
    res.sendFile( path + "Ext/shopping.html")
})

// server started
app.listen(3000, function(error){
    console.log("Server is listening at port" + 3000 )
})


