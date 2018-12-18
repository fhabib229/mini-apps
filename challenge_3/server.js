const express = require('express');
const app = express();
const port = 3000;
const parse = require('body-parser');
const database = require('./DB');
app.use(express.static('public'));
app.use(parse.text());

app.listen(port, ()=> console.log('Listening on port ' + port));

