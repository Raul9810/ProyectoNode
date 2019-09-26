const express = require('express');
var app = express();
var arreglo = [], a1 = [], a2 = [];
var otro = {}

app.get("/", (req,res)=>{
    res.send();
})

app.get("/:nombre/:edad", (req,res)=>{
    var nombre = req.params.nombre
    var edad = req.params.edad
    if(req.url != '/favicon.ico'){
        otro[nombre] = edad
        res.send();
        console.log(otro);
    }
})  

app.get("/:id", (req,res)=>{
    if(req.url != '/favicon.ico'){
        arreglo.push(req.params.id)
        res.send();
        console.log(arreglo);
    }
})

app.listen(3000,() => {
    console.log("Server is running");
})