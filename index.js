const express = require('express');
const pokedex = require('./pokedex')
var app = express();
var arreglo = [], a1 = [], a2 = [];
var otro = {}

app.get("/", (req,res)=>{
    res.send();
})

app.get('/pokedex/id/:id', (req,res) =>{
    const id = req.params.id
    res.json(pokedex.pokemon[id-1])
})

app.get('/pokedex/name/:name', (req,res) =>{
    const name = req.params.name
    pokedex.pokemon.forEach( x => {
        if(x.name == name) res.send(pokedex.pokemon[x.id-1])
    });
})

app.get('/pokedex/random', (req,res) =>{
    const numR = Math.floor((Math.random() * 150) + 1);
    res.json(pokedex.pokemon[numR])
})

app.get('/pokedex/image/:id', (req,res) =>{
    const id = req.params.id
    res.send("<img src='"+pokedex.pokemon[id-1].img+"'>")
})

app.listen(3000,() => {
    console.log("Server is running");
})

// app.get("/:nombre/:edad", (req,res)=>{
//     var nombre = req.params.nombre
//     var edad = req.params.edad
//     if(req.url != '/favicon.ico'){
//         otro[nombre] = edad
//         res.send();
//         console.log(otro);
//     }
// })  

// app.get("/:id", (req,res)=>{
//     if(req.url != '/favicon.ico'){
//         arreglo.push(req.params.id)
//         res.send();
//         console.log(arreglo);
//     }
// })