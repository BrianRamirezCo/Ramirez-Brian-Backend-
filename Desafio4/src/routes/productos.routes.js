const express = require('express');
const routerProductos = express.Router()

/*Database*/
const DB_PRODUCTOS = []

routerProductos.get('/',(req,res)=>{
    res.status(200).json(DB_PRODUCTOS)
})

routerProductos.get('/:id',(req,res)=>{
    const product = getProductsById(req.params.id)
    res.send(product)
})

routerProductos.delete('/:id',(req,res)=>{
    const productos = deleteProductById(req.params.id)
    res.send(productos)
})

routerProductos.post('/', (req, res)=>{
    addProduct(req.body);
    res.status(201).json(DB_PRODUCTOS)
})



/*buscar por el id*/
function getProductsById(id) {
    return DB_PRODUCTOS.find(producto => producto.id === id)
}
/*borrar por le id*/
function deleteProductById(id) {
        const prod = DB_PRODUCTOS
        const product = prod.findIndex(x => x.id === id)
        return prod.splice(product, 1);
        
}

/*agregar producto con un nuevo id*/
function addProduct(producto){
        const productos = DB_PRODUCTOS
        let newId;0

        if(productos.length == 0){
            newId = 1
        }else {
            newId = productos[productos.length - 1].id + 1
        }

        const newProducto = { ...producto ,id: newId}
        productos.push(newProducto);
        return newId;
}

module.exports = routerProductos;