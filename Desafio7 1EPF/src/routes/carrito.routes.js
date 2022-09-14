const express = require('express');


const ContenedorArchivo = require('../container/contenedor.js')


const carritoRouter = express.Router();
const carritoApi = new ContenedorArchivo('/dbcarrito.json');
const productoApi = new ContenedorArchivo('/dbproducts.json');

carritoRouter.get('/', async (req, res) => {
    res.json(await carritoApi.listarAll())
})

carritoRouter.post('/', async (req, res) => {
    res.json({id: await carritoApi.guardar({productos: [] }) })
})

carritoRouter.delete('/:id', async (req, res) => {
    res.json(await carritoApi.borrar(req.params.id))
})

carritoRouter.get('/:id/productos', async (req, res) => {
    const carrito = await carritoApi.listar(req.params.id)
    res.json(carrito.productos)
})

carritoRouter.post('/:id/productos', async (req, res) => {
    const carrito = await carritoApi.listar(req.params.id)
    const producto = await productoApi.listar(req.params.id) 
    carrito.productos.push(producto)
    await carritoApi.actualizar(carrito, req.params.id)
    res.end
})

carritoRouter.delete('/:id/productos/:idProd', async (req, res) => {
    const carrito = await carritoApi.listar(req.params.id)
    const index = carrito.productos.findIndex(producto => producto.id === req.params.idProd)
    if (index != -1) {
        carrito.productos.splice(index, 1)
        await carritoApi.actualizar(carrito,req.params.id)
    }
    res.end
})

module.exports = carritoRouter;