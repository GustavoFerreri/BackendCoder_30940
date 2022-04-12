const express = require('express');
const productRoutes = require('./routes/products')
const app = express();

app.use(express.json()) //Formatea de forma automatica los request
app.use('/api', productRoutes)


app.listen(8080, ()=>{
    console.log('Server listen');
})