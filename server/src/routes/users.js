const express = require('express');
const router = express.Router();
const {login} = require('../controllers/users.controller');
const User = require('../models/User');

router.get('/', (req, res) => {
    res.json(User.findAll());
});

router.post('/login', async (req, res) => {
    return login(req, res);
});

module.exports = router;