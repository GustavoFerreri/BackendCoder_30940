'use strict'

// llamamos a la dependencia express
const express = require('express');

// utilizamos el midleware body-parser
const bodyParser = require('body-parser')
const productRoutes = require('./routes/products')

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json()) //Formatea de forma automatica los request

app.use('/api', productRoutes)

app.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
})