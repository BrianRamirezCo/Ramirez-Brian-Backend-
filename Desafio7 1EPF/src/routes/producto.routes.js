const express = require('express');
const ContenedorArchivo = require('../container/contenedor.js')
const config = require('/config/config.js')


const productosRouter = express.Router();
const productoApi = new ContenedorArchivo('./dbproducts.json');

const administrador = config.esAdministrador;
function soloAdministrador(req,res,next) {
    if(!administrador) {
        res.status(403).json({code:403, message:`Forbidden access ${req.method} ${req.baseUrl} ${req.url}`})
    }else{
    next();
    }
}

productosRouter.get('/', async (req, res, ) => {
    const productos = await productoApi.listarAll()
    res.json(productos)
})

productosRouter.get('/:id', async (req, res, ) => {
    res.json(await productoApi.listar(req.params.id))
})

productosRouter.post('/:id', soloAdministrador, async (req, res, ) => {
    res.json({id: await productoApi.guardar(req.body)})
})

productosRouter.put('/:id', soloAdministrador, async (req, res, ) => {
    res.json({id: await productoApi.actualizar(req.body,req.params.id)})
})

productosRouter.delete('/:id', soloAdministrador, async (req, res, ) => {
    res.json(await productoApi.borrar(req.params.id))
})

module.exports = productosRouter;