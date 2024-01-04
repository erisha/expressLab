const express = require('express');

const app = express();
const PORT = 3000;

//middleware
const morgan = require('morgan')
app.use(morgan)

//main route
app.get('/', (req,res) => {
    console.log(req.url);
    res.send('<h1>Homepage</h1>')
})