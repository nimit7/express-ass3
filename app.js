const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const users = require('./users')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public/css')))

app.use('/users', users);

app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'main.html'));
})

app.listen(3006)