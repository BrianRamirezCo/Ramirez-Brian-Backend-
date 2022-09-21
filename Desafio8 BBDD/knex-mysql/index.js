import { ContenedorSql } from "./src/container/contenedorSQL.js";

const apiProductos = new ContenedorSql('productos');

async function main(){
    const listaProductos = [        
        {
        producto:"zapatillas Puma Raven",
        descripcion:"zapas negras",
        precio: 1700,
        stock: 20
        }
        ,
        {
            producto:"zapatillas Vapormax",
            descripcion:"zapas con suspension",
            precio: 3000,
            stock: 10
        }
        ,
        {
            producto:"Gorro Adidas",
            descripcion:"gorra de verano",
            precio: 3500,
            stock: 15
        }
        ,
        {
            producto:"Remera Nike",
            descripcion:"Remera negra",
            precio: 3600,
            stock: 5
        }
    ]

    let res;


    //insertar en la base de datos
    res = await apiProductos.insertar(listaProductos)
    console.log('Inserta en Tabla', res);

    //seleccion los registro
    res = await apiProductos.listarAll();
    console.log('muestra los registros', res);

    //seleccion por id
    res = await apiProductos.listar(2);
    console.log('muestra por id', res);

    //actualizar
    res = await apiProductos.actualizar(4, {descripcion:"Remera oscura",})
    console.log('actualizamos', res);
    
    //seleccion los registro
    res = await apiProductos.listarAll();
    console.log('muestra los registros', res);
    

    //eliminar por idç
    res = await apiProductos.eliminar(3);
    console.log('se elimino el producto', res);

    //seleccion los registro
    res = await apiProductos.listarAll();
    console.log('muestra los registros', res);

    //cerrar conexion con la base de datos
    await apiProductos.cerrarConexion();
}

main();