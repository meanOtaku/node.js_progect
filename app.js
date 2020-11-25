const express = require('express');

//port of server
var port = process.env.PORT || 8080;

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs' );

// listen for requests
app.listen(port);

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/about-us', (req, res) => {
    res.redirect('about');
});

app.get('/blogs/create', (req, res) => {
    res.redirect('create');
});

app.use((req,res) => {
    res.status(404).render('404');
});