const express = require('express');
const Contenedor = require('./app3.js')

const app = express();
const traerProductos = new Contenedor();

app.get('/productos', async (req, res) => {
    let getProd = await traerProductos.p();
    res.send(`holis ${getProd}`)
 // res.send(traerProductos.showProductArray());
})
app.get('/productoRandom', async (req, res) => {
    let getProd = await traerProductos.c();
    res.send(`chau ${getProd}`)
// res.send(traerProductos.showProductArray());
})



const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Server on http://localhost:${PORT}`);
});