const express = require('express');

//port of server
var port = process.env.PORT || 8080;

//express app
const app = express();

// listen for requests
app.listen(port);

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
})

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
})