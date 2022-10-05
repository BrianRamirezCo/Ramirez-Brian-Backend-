import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js"

class ProductosDaoMongoDb extends ContenedorMongoDb {

    constructor() {
        super('productos', {
            producto:{ type: String, required: true },
            descripcion: { type: String, required: true },
            precio: { type: Number, required: true },
            stock: { type: Number, required: true },
        })
    }
}

export default ProductosDaoMongoDb