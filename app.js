var express = require("express");
var app = express();

app.use(express.static("public")); // It will tell express to serve the files from "public" directory
app.set("view engine", "ejs"); // It will expect the files to be ejs files

app.get("/", function(req, res){
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
   var thing = req.params.thing;
   res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res) {
   var posts = [
      {title: "Post 1", author: "Susy"},
      {title: "My adorable pet bunny", author: "Charlie"},
      {title: "Can you believe this pomsky?", author: "Zsolt"}
   ];
   res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is listening!!!"); 
});