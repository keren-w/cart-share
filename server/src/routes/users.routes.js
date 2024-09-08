const express = require('express');
const router = express.Router();
const {login, getUserProfile} = require('../controllers/users.controller');
const User = require('../models/User');

router.post('/login', async (req, res) => {
    await login(req, res);
});

router.get('/:id', async (req, res) => {
    await getUserProfile(req, res);
});

module.exports = router;