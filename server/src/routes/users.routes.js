const express = require('express');
const router = express.Router();
const {login} = require('../controllers/users.controller');
const User = require('../models/User');

router.get('/', async (req, res) => {
    res.json(await User.find());
});

router.post('/login', async (req, res) => {
    await login(req, res);
});

module.exports = router;