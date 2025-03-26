const express = require('express');
const app = express();
const port = 3000;

const plateBlog = require('./array.js')

app.get('/', (req, res) => {
    res.send('Server del mio blog');
})

app.get('/bacheca', (req, res) => {
    res.send(plateBlog);
})

app.listen(port, () => {
    console.log('Server avviato');
});