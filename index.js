const dotenv = require('dotenv').config();
const express = require('express');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('AEeeEEEEEEEE  ');
})

app.listen(3000);