const express = require('express');
const { Router } = express;
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
    let prod = await file.getAll();
    let id = req.params.id;
    res.send({
        message: 'Respuesta correcta',
        data: prod.find(x=>x.id ==id)
    })
})

router.post('/product', (req, res)=>{
    // Desectructuramos la informacion que mande post
    // Siendo ya bodyParser usando 
    let {title, price, thumbnail} = req.body;
    let newProduct = { title, price, thumbnail }
    file.save(newProduct)
    res.send('Producto cargado de forma correcta')
})

router.put('/product/:id', async (req, res)=>{
    let id = req.params.id;
    let {title, price, thumbnail} = req.body;
    let prod = await file.getAll();
    prod.find(prod=>prod.id ==id).update({title, price, thumbnail})
    res.send('Producto Modificado')
})

router.delete('/delete/:id', (req, res)=>{
    let id = req.params.id;
    file.delete(id)
    res.send('Producto Eliminado')
})

module.exports = router;