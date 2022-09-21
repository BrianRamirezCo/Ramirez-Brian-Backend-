/*------------------modulos---------------*/
const express = require('express');
const path = require('path');
const {Server : HttpServer } = require('http');
const {Server : IOServer} = require('socket.io');
const knex = require('knex');

const knexSqlite = knex ({
    client:'sqlite3',
    connection:{
        filename: __dirname + './db.sqlite'
    }
})




/*------------------Instancia de servidor---------------*/
const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

/*------------------Middlewares---------------*/
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/*------------------Base de datos---------------*/

/*------------------Rutas---------------*/
app.get('/', (req , res) => {
    res.sendFile(path.join(__dirname, './public/', 'index.html'));
})
/*------------------Servidor---------------*/
const PORT = 3000;
const server = httpServer.listen(PORT, () =>{
    console.log(`Servidor listening on http://localhost:${PORT}`);
})
/*-------------------*/

async function createTables(){
    const exists = await knexSqlite.schema.hasTable('message')
    if (!exists){
        await knexSqlite.schema.createTable('message', table =>{
    table.increments('id'),
    table.string('from'),
    table.string('text')
    })
    }
    
}

createTables();




/*------------------Websocket---------------*/

io.on('connection', async (socket) => {
    const messages = await knexSqlite.from('message').select('from', 'text')
    socket.emit('messages', messages);

    socket.on('newMessage', async msg =>{
       await knexSqlite('message').insert({from: socket.id, text: msg});
       const messages = await knexSqlite.from('message').select('from', 'text')
       io.sockets.emit('messages', messages);
    })
})



