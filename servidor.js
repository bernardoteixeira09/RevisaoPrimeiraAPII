const express = require('express');

const app = express();

let ALUNOS = [
    {id: 1, nome: 'Bernardo', curso: 'Desenvolvimento de Sistemas'},
    {id: 2, nome: 'Carlos', curso: 'Redes de Computadores'},
    {id: 3, nome: 'Daniela', curso: 'Banco de Dados'},
    {id: 4, nome: 'Eduardo', curso: 'Administração'},
    {id: 5, nome: 'Gustavo', curso: 'Desenvolvimento de Sistemas'},
];

app.get('/', (req, res) =>{
    res.json({
         message: 'API Alunos funcionando!' 
    });
});

const PORTA =3000;
app.listen(3000, () => {
    console.log('Servidor iniciado com sucesso');
    console.log(`Acesse: http://localhost:${PORTA}`);
});
