var express = require('express');
var app = express();

app.use('/store', (req, res, next) => {
    console.log('Hi! I am an agent on request to store');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/store', (req, res) => {
    res.send('This is store');
});

app.listen(3006);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});