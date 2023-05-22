//jshint esversion:6

const express = require("express");
const app = express();

app.listen(3000, function () {
    console.log("Starting Server on Port 3000....");
});

app.get("/", function (req, res) {
    res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>Hello, I'm FundiAR!</h1><h2>About Me</h2><p>I'm learning NodeJS and so this is my first server while I'm learning back end!</p>");
});

app.get("/contact",(req, res)=> {
    res.send("My email is: fundiar@fundi.com, contact me as you wish!");
});