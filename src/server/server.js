const express = require('express')
const path = require('path')

const startServer = (options) => {
    const { port, public_path = 'public'} = options
    
    const app = express()

    //para poder usar middlewares se usa la palabra use (express)
    app.use(express.static(public_path)) //contenido estático disponible para su uso

    app.get('*', (req, res) => { //req= petición, res= respuesta
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(port, () => {
        console.log(`Escuchando en el puerto ${port}`)
    })

}

module.exports = {
    startServer
}