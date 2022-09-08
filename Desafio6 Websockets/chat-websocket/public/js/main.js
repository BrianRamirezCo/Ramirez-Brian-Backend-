const socket = io();

socket.on('from-server-mensajes', mensajes =>{
    render(mensajes);
})

function render(mensajes){
const cuerpoMensajes = mensajes.map((msj) =>{
    return `<span><b>${msj.author}:</b><span>${msj.text}</span></span>`
}).join('<br>')

    document.getElementById('historial').innerHTML = cuerpoMensajes;
}


function enviarMensaje(){
    const inputUser = document.getElementById('user');
    const inputContenido = document.getElementById('contenidoMensaje');

    const mensaje = {
        author: inputUser.value,
        text: inputContenido.value
    }
    socket.emit('from-client-mensaje',mensaje);
}