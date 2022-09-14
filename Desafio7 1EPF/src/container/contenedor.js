const fs = require('fs/promises');


class ContenedorArchivo{

    constructor(ruta) {
        this.ruta = ruta;
    }

    async listar(id){
        const objs = await this.listarAll()
        const busq = objs.find(o => o.id == id)
        return busq;
    }

    async listarAll() {
        try {
            const objs = await fs.readFile(this.ruta , 'utf8')
            return JSON.parse(objs)
        }catch(err) {
            return []
        }
    }

    async guardar(objs) {
        const obj = await this.listarAll()

        let newId
        if (obj.length == 0) {
            newId = 1
        }

        const newObj = {...objs, id: newId, timestamp: new Date()}
        objs.push(newObj)

        try{
            await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2))
            return newId
        }catch(err) {
            throw new Error(`Error al guardar: ${error}`)
        }
    }

    async actualizar(elem , id){
        const objs = await this.listarAll()
        const index = objs.findIndex(o => o.id == id)
        if (index == -1) {
            throw new Error(`No se encontro el id: ${id}`)
    }else {
        objs[index] = {...elem,id}
        try{
            await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2))
            return id
        }catch (error){
            throw new Error(`error al borrar ${error.message}`)
            }
        }
    }


    async borrar(id){
        const objs = await this.listarAll()
        const index = objs.findIndex(o => o.id == id)
        if (index ==  -1) throw new Error(`error al borrar ${id}`)

        objs.splice(index, 1)
        try{
            await fs.writeFile(this.ruta, JSON.stringify( [], null, 2))
        }catch (error) {
            throw new Error(`error al borrar `)
        }
    }

    async borrarAll(){
        try{
            await fs.writeFile(this.ruta, JSON.stringify( [], null, 2))
        }catch (error) {
            throw new Error(`error al borrar todo ${error}`)
        }
    }
}

module.exports = ContenedorArchivo;