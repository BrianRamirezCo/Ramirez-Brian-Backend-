const express = require('express');
const routerProductos = express.Router()

/*Database*/
const DB_PRODUCTOS = []

routerProductos.get('/listaproductos',(req,res)=>{
    res.status(200).json(DB_PRODUCTOS)
})

routerProductos.post('/products', (req, res)=>{
    addProduct(req.body);
    res.status(201).json(DB_PRODUCTOS)
})


routerProductos.get('/mostrarproducto/:id',(req,res)=>{
    const product = getProductsById(req.params.id)
    res.send(product)
})

routerProductos.put('/cambiarprod/:id', (req,res)=>{
    try{
    const id = req.params.id
    const actualizarProduct = DB_PRODUCTOS.find(p => p.id == id);
    const {title, price} = req.body;

    if(actualizarProduct === undefined){
    res.status(404).json({error: 'Producto no encontrado'});
    }else{
        actualizarProduct.title = title;
        actualizarProduct.price = price;

        res.status(201).json({msg: 'Producto actualizado'});
    }
    }catch (error){
        res.status(500).json({
            code:500,
            msg:`error al obtener ${req.method} ${req.url}`
        })
    }
})

routerProductos.delete('/productos/:id',(req,res)=>{
    const productos = deleteProductById(req.params.id)
    res.send(productos)
})






/*buscar por el id*/
function getProductsById(id) {
    const asd = DB_PRODUCTOS.find(producto => producto.id == id)
    return asd
}
/*borrar por le id*/
function deleteProductById(id) {
        const prod = DB_PRODUCTOS
        const product = prod.findIndex(x => x.id == id)
        return prod.splice(product, 1);
        
}

/*agregar producto con un nuevo id*/
function addProduct(producto){
        const productos = DB_PRODUCTOS
        let newId;

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