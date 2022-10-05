import { Router } from 'express';
import { productosDao } from '../daos/index.js'

const productosRouter = Router()

const productosControllerGet = async (req, res) => {
    const productos = await productosDao.listarAll();
    res.json(productos);
};

const productosControllerGetById = async (req, res) => {
    const productos = await productosDao.listar(req.params.id);
    res.json(productos);
};

productosRouter.get('/', productosControllerGet)
productosRouter.get('/:id', productosControllerGetById)

productosRouter.post('/', async (req, res) => {
    const prodAgregado = await productosDao.guardar(req.body);
    res.json(prodAgregado)
})

productosRouter.put('/:id', async (req, res) => {
    const data = req.body;
    const { id } = req.params;
    const prodActualizado = await productosDao.actualizar(id, data);
    res.json(prodActualizado)
})

productosRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const prodEliminado = await productosDao.borrar(id);
    res.json(prodEliminado)
})

export { productosRouter }