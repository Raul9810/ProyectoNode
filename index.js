const express = require('express');
var app = express();

app.get("/", (req,res)=>{
    console.log(req);
    res.send("Que onda Fertss");
})

app.listen(3000,() => {
    console.log("Server is running");
})