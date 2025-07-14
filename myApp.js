let express = require('express');
let path = require('path');
require('dotenv').config(); 

let app = express();

app.use('/public', express.static(path.join(__dirname, '/public'))); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html')); 
});

app.get('/json', (req, res) => {
    const messageStyle = process.env.MESSAGE_STYLE;
    const message = (messageStyle === 'uppercase')
    ? "HELLO JSON"
    : "Hello json";
    console.log(message); 
    res.json({message});
});



































 module.exports = app;