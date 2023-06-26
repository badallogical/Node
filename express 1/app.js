const express = require("express")

const app = express()

var path = 'C:/Users/ANIMATION/Desktop/express 1/public/'

app.use( express.static('public'))

app.set('view engine','ejs');
app.set('views','C:/Users/ANIMATION/Desktop/express 1/views' );

app.get("/", function(req, res){
    res.sendFile(path + "shopping.html")
})

app.get("/about/:name/:info", function(req, res){
    console.log(req.params.name);
    res.render("index" , { myname : req.params.name, info : req.params.info})
})

app.get("/profile/:username", function(req,res){
    res.render("profile",
    {
        name : data[req.params.username].name,
        email : data[req.params.username].email,
        hobby : data[req.params.username].hobby,
        address : data[req.params.username].address,
        job : data[req.params.username].job
    }
    )
});

app.listen(3000, function(error){
    console.log("Server is listening at " + 3000)
})

data = {
    "ram123" : {
        name : "ram",
        email : "ram@gmail.com",
        hobby : "coding",
        address : "neelmatha lucknow",
        job: "web developer"
    },
    "mohan123" : {
        name : "mohan",
        email : "ram@gmail.com",
        hobby : "coding",
        address : "neelmatha lucknow",
        job: "native developer"
    },
    "shyam" : {
        name : "shyam",
        email : "ram@gmail.com",
        hobby : "coding",
        address : "neelmatha lucknow",
        job: "backend developer"
    },
    "jack" : {
        name : "jack",
        email : "ram@gmail.com",
        hobby : "coding",
        address : "neelmatha lucknow",
        job: "dancer"
    }
}

console.log(data["ram123"].name)
