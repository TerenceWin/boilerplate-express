let express = require('express');
let path = require('path');

let app = express();

console.log("Hello World");
app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/', (req, res) => {
    const absolutePath = path.join(__dirname, 'views', 'index.html');
    res.sendFile(absolutePath); 
});



































 module.exports = app;