const path = require('path');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const users = require('./users');


const app = express();

app.set('views', path.join('views'));
app.set('view engine', 'hbs');

app.engine('hbs', expressHandlebars({
        extname: 'hbs',
    })
);

app.get('/users/:id', (req, res) => {
    //console.log(users.filter(user => user.id == req.params.id)[0]);
    const userData = users.filter(user => user.id == req.params.id)[0];
    if(!userData){
        throw new Error('User Not found');
    }
    res.render('profile', {userData});
});

app.use((err, req, res, next) => {
    res.render('error', {errorMessage: err.message});
});

module.exports = app;
