const express = require('express');
const path = require('path');

const app = express();

const personas = []

/*-------------------Midlewares-----------------------------*/
app.use(express.static(path.join(__dirname, 'public' )));
app.use(express.urlencoded({ extended: true }));

/*-------------------Motores de plantilla -----------------------------*/
app.set('views', './views')
app.set('view engine' , 'ejs')

/*-------------------Rutas -----------------------------*/
app.get('/', (req, res) => {
    res.render('inicio', {personas})
})

app.post('/personas', (req, res) => {
    personas.push(req.body)
    console.log(personas);
    res.redirect('/')

})


/*-------------------Servidor -----------------------------*/
const PORT = 8080;
const server = app.listen(PORT,() =>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

server.on('error', (err) => 
    console.log(`Error en el servidor ${err}`
));
