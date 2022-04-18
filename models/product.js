'use strict'

// traemos moongose en una variable
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// Se crea el modelo de la base
const ProductSchema = Schema({
    id: Number,
    title: String,
    price: Number,
    img: String
})

mongoose.model('Product', ProductSchema)