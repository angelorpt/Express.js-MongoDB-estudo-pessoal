const express = require('express');
const router = express.Router();
const Person = require('./../models/person');

router.get('/', (req, res) => {
    res.send('Hello person');
});

module.exports = router;