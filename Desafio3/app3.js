
const fs = require('fs/promises');

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

async p(){
    const zz = []
    const prod = await this.accessDb()
    const newArray = prod.map(producto => producto.title)
    zz.push(newArray)
    return zz;
}

    async b(id){
        const aa = []
        const prod = await this.accessDb()
        const item = prod.find(producto => producto.id === id)
        aa.push(item.title)
        return aa;

}

    async c(){
    const prod = await this.accessDb()
    let i = Math.floor(Math.random()*prod.length);
    let j = prod[i];
    return j.title
    // console.log(rValue)

    }

}
async function main(){
const obtenerProductos = new Contenedor('productos.json')
console.log(await obtenerProductos.p());
console.log(await obtenerProductos.b(1));
console.log(await obtenerProductos.b(2));
console.log(await obtenerProductos.b(3));
console.log(await obtenerProductos.c());
}
main();

module.exports = Contenedor;