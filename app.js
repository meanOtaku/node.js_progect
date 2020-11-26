const express = require('express');
const morgan = require('morgan');

//port of server
var port = process.env.PORT || 8080;

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs' );

// listen for requests
app.listen(port);

//middleware  & static files

app.use(express.static('public'))

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/blogs/create', (req, res) => {
    res.render('create');
});

app.use((req,res) => {
    res.status(404).render('404');
});