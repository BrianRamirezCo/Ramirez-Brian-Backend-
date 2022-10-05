import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js";


class CarritoMongoDb extends ContenedorMongoDb{
    constructor(){
        super('carritos',{
            productos: { type: String, required: true}

        });
    }
    async guardar(carrito = {productos:[]}){
        return super.guardar(carrito)
    }
}

export default CarritoMongoDb;