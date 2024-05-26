//require('dotenv').config();
import env from 'dotenv'

//const { get } = require('env-var');
import ennvar from 'env-var';

env.config();


export const envs =  {
    PORT: ennvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: ennvar.get('PUBLIC_PATH').default('public').asString()
}

/* module.exports = {
    envs
} */