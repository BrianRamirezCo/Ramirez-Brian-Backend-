const { log } = require('console');
const fs = require('fs/promises')


class Contenedor{
    constructor(url){
        this.url = url
    }
    async accessDb(){
        try {
            const prod = await fs.readFile(this.url , 'utf-8')
            return JSON.parse(prod)
        } catch (error) {
            return []
        }
    }


    async save(producto){
        try {
        const productos = await this.accessDb();
        let newId;

        if(productos.length == 0){
            newId = 1
        }else {
            newId = productos[productos.length - 1].id + 1
        }

        const newProducto = {id: newId, ...producto}
        productos.push(newProducto);
        await fs.writeFile(this.url , JSON.stringify(productos, null, 2))
        return newId;
    
        }catch (error) {
        console.log("error al guardar"); 
        }
    }

    async deleteById(id){
        const prod = await this.accessDb();
        const product = prod.findIndex(x => x.id === id)

        if(product == -1) {
        console.log("producto no encontrado")
        return null
        }else
        { prod.splice(product, 1);
        console.log("producto eliminado")
        await fs.writeFile(this.url , JSON.stringify(prod, null, 2))
        }      
    }

    async getById(id){
        const prod = await this.accessDb();
        const product = prod.find(x => x.id === id)
    }

    async getAll(){
        const prod = await this.accessDb();
        return prod;
    }

    async deleteAll(){
        const prod = await this.accessDb();
        let empty= prod.splice(0,prod.length);
        console.log(empty);
        
        await fs.writeFile(this.url , JSON.stringify(prod, null, 2))

        
    }
}  



async function main(){
const obtenerProductos = new Contenedor('./archivos/productos.json')
console.log(await obtenerProductos.save({title:"producto1",price:1500,thumbnail:'url/imagenproducto1'}))
console.log(await obtenerProductos.save({title:"producto2",price:1600,thumbnail:'url/imagenproducto2'}))
console.log(await obtenerProductos.save({title:"producto3",price:1700,thumbnail:'url/imagenproducto3'}))
// console.log(await obtenerProductos.deleteById(2));
// console.log(await obtenerProductos.getById(3));
// console.log(await obtenerProductos.getAll());
// console.log(await obtenerProductos.deleteAll());
}
main();