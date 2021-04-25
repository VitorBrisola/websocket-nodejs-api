import express from 'express';

import { databaseConnection } from './database'


const PORT = 3333;

const app = express();

databaseConnection.create();

/*
 * GET = buscas
 * POST = criação
 * PUT = alteração
 * DELETE = delte
 * PATCH = alteração específica
 */

app.get('/', (req,res) => {
    return res.json({
        message: "olá NLW 05"
    })
});

app.post('/',(req,res) => {
    return res.json({
        message: "Usuário Cadastrado!"
    })
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))