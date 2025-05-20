import express from 'express';

const abaixoassinado = express.Router();

abaixoassinado.get('/', (req, res) => {
    res.send("Rota do Abaixoassinado")
});

export default abaixoassinado;