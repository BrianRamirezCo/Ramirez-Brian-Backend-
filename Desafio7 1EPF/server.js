/*Modulos */
const express = require('express')
const path = require('path');

const carritoRouter = require('./src/routes/carrito.routes.js')
const productoRouter = require('./src/routes/producto.routes.js')




/*instancia de server*/
const app = express();


/*Midlewars*/
app.use(express.json())
app.use(express.static(__dirname + '/public'))

app.use('/api/carritos', carritoRouter)
app.use('/api/productos', productoRouter)


/*Server*/ 
const PORT = 8080;
const server = app.listen(PORT,() =>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

server.on('error', (err) => 
    console.log(`Error en el servidor ${err}`
));
