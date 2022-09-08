/*------------------modulos---------------*/
const express = require('express');
const path = require('path');
const {Server : HttpServer } = require('http');
const {Server : IOServer} = require('socket.io');



/*------------------Instancia de servidor---------------*/
const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

/*------------------Middlewares---------------*/
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/*------------------Base de datos---------------*/

const DB_MENSAJES = [
    {
        author : 'JOHN',
        text : 'hello'
    }
]

/*------------------Rutas---------------*/
app.get('/', (req , res) => {
    res.sendFile(path.join(__dirname, './public/', 'index.html'));
})
/*------------------Servidor---------------*/
const PORT = 3000;
const server = httpServer.listen(PORT, () =>{
    console.log(`Servidor listening on http://localhost:${PORT}`);
})

/*------------------Websocket---------------*/

io.on('connection', (socket) => {
    console.log(`Nuevo cliente conectado ${socket.id}`);
    io.sockets.emit('from-server-mensajes', DB_MENSAJES );
    socket.on('from-client-mensaje', mensaje =>{
        DB_MENSAJES.push(mensaje);
        io.sockets.emit('from-server-mensajes', DB_MENSAJES );
    })
})
