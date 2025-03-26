const express = require('express');
const app = express();
const port = 3000;

const plateBlog = require('./array.js')

//Static asset
app.use(express.static('public'));

//Route /
app.get('/', (req, res) => {
    res.send('Server del mio blog');
})

//Route /bacheca
app.get('/bacheca', (req, res) => {
    res.json(plateBlog);
})


//Server port
app.listen(port, () => {
    console.log('Server avviato');
});