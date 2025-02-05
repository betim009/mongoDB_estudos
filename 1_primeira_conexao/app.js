const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para analisar JSON
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/my_db')
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Definição do esquema
const usuarioSchema = new mongoose.Schema({
    nome: String,
    email: String,
    idade: Number
});

// Criando o modelo
const Usuario = mongoose.model("Usuario", usuarioSchema, "usuarios");

// Rota para buscar todos os logs
app.get('/usuarios', async (req, res) => {
    try {
        const results = await Usuario.find({});
        res.status(200).json(results);
    } catch (err) {
        res.status(500).send('Erro ao buscar: ' + err.message);
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});