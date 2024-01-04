const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Look at all the puppies')
});

router.post('/', (req, res) => {
    res.send('Adding new puppies')
})

router.get('/puppies/:puppyID', (req, res) => {
    res.send('Hi, my name is....')
})

module.exports = router;