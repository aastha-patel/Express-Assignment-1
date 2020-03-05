const express = require('express');
const ejs = require('ejs');
const path = require('path');
const moment = require('moment');

const app = express();

app.use(function(req, res, next) {
    res.locals.year = moment().format('YYYY');
    next();
  });

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));

app.get('/', function(req,res){
    res.render('index',{});
});


app.get('/about', function(req,res){
    res.render('about',{});
});

app.get('/gallery', function(req,res){
    res.render('gallery',{});
});

app.get('/contact', function(req,res){
    res.render('contact',{});
});

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log(`Listening on port ${port}`);
});