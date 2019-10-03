const express = require('express');
const pokedex = require('./pokedex')
const bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json()) //convierte al formato json
app.use(bodyParser.urlencoded({ extended:true })) //body esta en la url de la peticion

app.get("/", (req,res)=>{
    res.send();
})

app.get('/pokedex/\\brandom\\b', (req,res) =>{
    const numR = Math.floor((Math.random() * 150) + 1);
    res.json(pokedex.pokemon[numR])
})

app.get('/pokedex/:id', (req,res, next) =>{
    const id = req.params.id
    if(isNaN(id)) next();
    res.json(pokedex.pokemon[id-1])
})

app.get('/pokedex/:name', (req,res) =>{
    const name = req.params.name
    pokedex.pokemon.forEach( x => {
        if(x.name == name) res.send(pokedex.pokemon[x.id-1])
    });
})

app.get('/pokedex/image/:id', (req,res) =>{
    const id = req.params.id
    res.send("<img src='"+pokedex.pokemon[id-1].img+"'>")
})

app.post('/pokedex', (req,res) => {
    res.json(req.body)
})

app.use((req,res) => {
    res.status(404)
    res.json({404:"No existe la pagina, suerte loser (Fer)"})
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