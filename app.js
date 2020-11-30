const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const dbURI = 'mongodb+srv://honeybisht123:honeybisht123@nodepro.a6gzy.mongodb.net/node-pro?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then((results) => app.listen(port))
    .catch((err) => console.log(err));


//port of server
var port = process.env.PORT || 8080;

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs' );

// listen for requests


//middleware  & static files

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.redirect('/blogs')
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About-me' });
});

//blog route
app.use('/blogs', blogRoutes);


app.use((req,res) => {
    res.status(404).render('404', { title: '404'});
});

