'use strict'

// llamamos a la dependencia express
const express = require('express');

// utilizamos el midleware body-parser
const bodyParser = require('body-parser');
// Instalamos moongose y lo aplicamos en la api
const mongoose = require('mongoose');
const productRoutes = require('./routes/products');

const app = express();

// Establecemos el puerto, si no esta habilitado el de la variable de entorno
// colocamos uno por defecto, en este caso particular utilizamos el mismo puerto
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json()); //Formatea de forma automatica los request

app.use('/api', productRoutes);

mongoose.connect('mongodb://localhost:27017/shop', (err, req) =>{
    if (err) throw err;
    console.log('Conexion a la base de datos establecida...')
    // Se incorpora dentro de la conexion de mongo la escucha del servidor
    app.listen(port, ()=>{
        console.log(`Servidor corriendo en http://localhost:${port}`);
    })
})

