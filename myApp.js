let express = require('express');
let path = require('path');
require('dotenv').config(); 

let app = express();

app.use('/public', express.static(path.join(__dirname, '/public'))); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html')); 

});

app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE === 'uppercase')
    {
        res.json({message: "HELLO JSON"});
    }else{
        res.json({message: 'Hello json'})
    }
});



































 module.exports = app;