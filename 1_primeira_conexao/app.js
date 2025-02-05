const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para analisar JSON
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/logs')
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Definir o esquema e o modelo para a collection "logs"
const logSchema = new mongoose.Schema({
    id: Number,
    // Adicione outros campos conforme necessário
});

const Log = mongoose.model('Log', logSchema, 'logs'); // O terceiro argumento especifica o nome da collection

// Rota para buscar todos os logs
app.get('/logs', async (req, res) => {
    try {
        const logs = await Log.find({});
        res.status(200).json(logs);
    } catch (err) {
        res.status(500).send('Erro ao buscar logs: ' + err.message);
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});