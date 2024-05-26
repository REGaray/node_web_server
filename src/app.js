const { envs } = require('./config/env')
const { startServer } = require('./server/server')

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

//Función agnóstica autoconvoda asincrónica
//Agnóstica porque no tiene nombre
//Autoconvocada cporque la ejecutamos con los paréntesis
( async () => {
    main()
})()