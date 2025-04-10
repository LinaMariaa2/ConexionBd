import server from './controllers/server'; //servidor express

// Definir el puerto en el que escuchará el servidor
const port = process.env.PORT || 5234;

server.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
});

