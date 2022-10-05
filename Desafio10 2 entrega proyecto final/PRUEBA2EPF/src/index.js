import app from './server.js'

/*Server*/ 
const PORT = 8080;
const server= app.listen(PORT, ()=>{
    console.log('Server listening on port', PORT);
})

server.on('error',error => console.error('Server error: ' + error));