class Usuario {
    constructor(nombre, apellido,libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName(){
        return this.nombre + " " + this.apellido;
    }
    addLibro(nombre,autor){
        const miLibros = {nombre:`${nombre}` , autor: `${autor}`};
        this.libros.push(miLibros)
        
    }

    addMascota(mascota){
        this.mascotas.push(`${mascota}`)
    }

    countMascotas(){
    return this.mascotas.length
    }

    getBookNames(){
    
        const nombreLibros = this.libros

        nombreLibros.forEach(nombres)
        function nombres(item){
        console.log(item.nombre)
        }



    //students.forEach(myFunction);

    // function myFunction(item) {

    //console.log(item);
    }
}


const usuario1 = new Usuario ("brian","ramirez",["it","asdasd"]);
const usuario2= new Usuario ("brian","ramirez",["it","asdasd"]);

// console.log(usuario1.getFullName());
usuario1.addLibro("it","stephen king")
usuario1.addLibro("chumbala","las calaveras")
// // usuario1.addMascota("mascota1")
// // usuario1.addMascota("mascota2")
// // // console.log(usuario1.mascotas);
// // // console.log(usuario1.countMascotas());
// // console.log(usuario1.getBookNames);
// console.log(usuario1.libros);
console.log(usuario1.getBookNames());


