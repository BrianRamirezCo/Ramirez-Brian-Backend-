/*Modulos */
const express = require('express')
const morgan = require('morgan')    

/*instancia de server*/
const app = express();
const routerProductos = require('./src/routes/productos.routes.js')

/*Midlewars*/
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))


/*rutas*/
app.use('/', routerProductos)

/*Server*/ 
const PORT = 8080;
const server= app.listen(PORT, ()=>{
    console.log('Server listening on port', PORT);
})

