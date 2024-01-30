const express = require('express')
const app = express
const port = 5002

app.get('/', (req, res) => {
    res.send('respuesta de raiz')
})

app.listen(port, () => {
    console.log('Servidor escuchando: ', port) 
})