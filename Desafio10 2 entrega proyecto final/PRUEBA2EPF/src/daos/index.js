import config from '../config.js'

let productosDao

switch (config.MODO_PERSISTENCIA) {
    case 'json':
        const { default : ProductosDaoArchivo } = await import('./productos/productosDaosArchivo.js')
        productosDao = new ProductosDaoArchivo(config.fileSystem.path)
        break
    // case 'firebase':
    //     const { default: PersonasDaoFirebase } = await import('./PersonasDaoFirebase.js')
    //     personasDao = new PersonasDaoFirebase()
    //     break
    case 'mongodb':
        const { default : ProductosDaoMongoDb } = await import('./productos/productosDaoMongoDb.js')
        productosDao = new ProductosDaoMongoDb()
        break
    default:
        const { default : ProductosDaoMem } = await import('./productos/productosDaoMemoria.js')
        productosDao = new ProductosDaoMem()
        break
}

export { productosDao }