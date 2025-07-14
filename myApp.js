let express = require('express');
let bodyParser = require('body-parser');

let path = require('path');
require('dotenv').config(); 

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));


app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`); 
    next();
});

app.use('/public', express.static(path.join(__dirname, '/public'))); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html')); 
});

app.get('/json', (req, res) => {
    const messageStyle = process.env.MESSAGE_STYLE;
    const message = (messageStyle === 'uppercase')
    ? "HELLO JSON"
    : "Hello json";
    res.json({message});
}); 

app.get('/now', (req, res, next) => {
    req.time = new Date().toString(); 
    next(); 
},
    (req, res) => {
        res.json({ time: req.time }); 
}
);

app.get('/:word/echo', (req, res) => {
    const word = req.params.word; 
    res.json({echo: word});
}); 

app.get('/name', (req, res) => {
    const first = req.query.first; 
    const last = req.query.last; 
    res.json({name: `${first} ${last}`}); 
})




 module.exports = app;