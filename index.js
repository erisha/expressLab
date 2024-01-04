const express = require('express');
const app = express();
const PORT = 3000;
const puppiesRoute = require('./routes/puppies');
//middleware
const morgan = require('morgan')
app.use(morgan)

//main route
app.get('/', (req,res) => {
    console.log(req.url);
    res.send('<h1>Homepage</h1>')
})

app.use('/puppies', puppiesRoute )

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});