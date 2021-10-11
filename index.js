const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/hello-world', (req, res) => {
    res.send('Hello world!');    
});

app.listen(8888, () => {
    console.log('App is listening to http://localhost:8888');
});