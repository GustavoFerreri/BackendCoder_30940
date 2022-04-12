const express = require('express');
const {Router} = express;
let router = new Router();
const Contenedor = require ('../asyncMock')

const file = new Contenedor('products')

router.get('/product', (req, res)=>{
    file.getAll().then(prod=>{
        res.send({
            message: 'Respuesta correcta',
            data: prod
        })
    })
})

router.get('/productRandom', async (req, res)=>{
    let prod = await file.getAll()
    res.send({
        message: 'Respuesta correcta',
        data: prod[Math.floor(Math.random()*prod.length)]
    })
})

router.get('/product/:id', async (req, res)=>{
    let prod = await file.getAll()
    res.send({
        message: 'Respuesta correcta',
        data: prod[Math.floor(Math.random()*prod.length)]
    })
})

router.post('/create', (req, res)=>{
    res.send
})

module.exports = router;