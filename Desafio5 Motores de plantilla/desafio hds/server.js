/*-----------------modulos---------------*/
const express = require('express');
const exphbs= require('express-handlebars')
const path = require('path');

/*-----------------instancia server---------------*/
const app = express();

/*-----------------midlewares---------------*/
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: true }));

/*-------motor de plantilla----------*/
app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: 'hbs'
}));
app.set('views' ,'./views');
app.set('view engine' ,'hbs')

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