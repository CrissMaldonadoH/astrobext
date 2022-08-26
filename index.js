const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes'); 
const path = require('path');
const bodyParser = require('body-parser'); 
const fetch = require('node-fetch');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views', path.join(__dirname, './views'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use('/', routes());

app.listen(PORT, (req, res) => {
    console.log(`Listening PORT ${PORT}`)
})