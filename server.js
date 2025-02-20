const express = require('express');
const { createUser } = require('./controllers/userController');

const app = express();
app.use(express.json());

app.post('/user', createUser);

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
1