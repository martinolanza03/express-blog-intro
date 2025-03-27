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

//Route /bonus
app.get('/bonus', (req, res) => {

    res.type("html")
        .send(createHTML());

})

//Server port
app.listen(port, () => {
    console.log('Server avviato');
});


//Function create html 

function createHTML() {
    let postForBlog = '';

    plateBlog.forEach(post => {
        postForBlog += `<div>  
            <h1>${post.title}</h1>
        <img src="${post.image}" alt="="${post.content}">
        <span>${post.tag[0]}</span><span>${post.tag[1]}</span>
        </div>
        `;

    });

    return postForBlog;
}
