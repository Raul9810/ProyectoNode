const express = require('express')
const db = require('../config/database')
const pokemon = express.Router()

pokemon.get("/",(req,res) =>{
    db.query("SELECT * FROM pokemon").then(rows => {
        res.status(200)
        res.json(rows)
    }).catch(err =>{
        console.log(err)   
        res.status(500) 
        res.send("Ya valio :'(")
    })
})

pokemon.get('/\\brandom\\b', (req,res) =>{
    const id = Math.floor((Math.random() * 722));
    db.query("SELECT * FROM pokemon WHERE pok_id = "+id).then(rows =>{
        res.json(rows)
        res.status(200)
    }).catch(err =>{
        console.log(err)
        res.status(500)
        res.send("Algo salio mal")
    })
})

pokemon.get('/:id', (req,res, next) =>{
    const id = req.params.id
    if(isNaN(id)) next();
    const query = "SELECT * FROM pokemon WHERE pok_id = '" + id + "'";
    db.query(query).then(rows => {
        if (rows.length > 0) {
            res.status(200);
            res.json(rows);
        }
        else {
            res.status(404);
            res.send("No se encontró");
        }
    }).catch(err => {
        console.log(err);
        res.status(500);
        res.send("Algo salió mal");
    });
})

pokemon.get('/:name([A-Za-z]+)', (req, res) => {
    const name = req.params.name;
    const query = "SELECT * FROM pokemon WHERE pok_name = '" + name + "'";
    db.query(query).then(rows => {
        if (rows.length > 0) {
            res.status(200);
            res.json(rows);
        }
        else {
            res.status(404);
            res.send("No se encontró");
        }
    }).catch(err => {
        console.log(err);
        res.status(500);
        res.send("Algo salió mal");
    });
})

// pokemon.get('/image/:id', (req,res) =>{
//     const id = req.params.id
//     res.send("<img src='"+pokedex.pokemon[id-1].img+"'>")
// })

pokemon.post('/', (req, res) => {
    query = "INSERT INTO pokemon (pok_name, pok_height, pok_weight, pok_base_experience) "
    query += `VALUES ${req.body.name}, ${req.body.pok_height},${req.body.pok_weight},${req.body.pok_base_experience}`
    db.query(query).then(rows => {})
    res.send("HOLA");
})

module.exports = pokemon