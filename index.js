const express = require('express');
var cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;

const categories = require('./Data/categories.json');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Dragon is running ')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(`Dragon API is running on ${port}`);
    
})