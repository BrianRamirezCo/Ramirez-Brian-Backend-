/*-----------------modulos---------------*/
const express = require('express');

/*-----------------instancia server---------------*/
const app = express();

/*-----------------midlewares---------------*/
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: true }));

/*-------motor de plantilla----------*/

app.set('views' ,'./views');
app.set('view engine' ,'pug')

/*-----------------rutas---------------*/
const DB_PERSONAS = []

/*-----------------rutas---------------*/
app.get('/', (req, res) => {
    res.render('vista', {DB_PERSONAS})
})

app.post('/personas', (req, res) => {
    DB_PERSONAS.push(req.body);
    console.log(DB_PERSONAS);
    res.redirect('/')
})

/*-------------------Servidor -----------------------------*/
const PORT = 9090;
const server = app.listen(PORT,() =>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

server.on('error', (err) => 
    console.log(`Error en el servidor ${err}`
));