const express = require('express');
const bodyParser = require('body-parser')
const morgan = require("morgan")
const notFoundHandler = require("./middleware/notFoundHandler")
const pokemon = require('./routes/pokemon')
var app = express();

app.use(morgan('dev'))
app.use(bodyParser.json()) //convierte al formato json
app.use(bodyParser.urlencoded({ extended:true })) //body esta en la url de la peticion

app.use("/pokemon", pokemon)

app.use(notFoundHandler)

app.listen(3000,() => {
    console.log("Server is running");
})
