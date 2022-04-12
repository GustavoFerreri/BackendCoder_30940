const express = require('express');
const productRoutes = require('./routes/products')
const app = express();

app.use('/api', productRoutes)


app.listen(8080, ()=>{
    console.log('Server listen');
})