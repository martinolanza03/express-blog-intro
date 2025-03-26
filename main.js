const express = require('express');
const app = express();
const port = 3000;

app.get('/', (res, req) => {
    console.log('Server del mio blog');
})

app.listen(port, () => {
    console.log('Server avviato');
});