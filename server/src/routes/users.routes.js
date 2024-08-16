const express = require('express');
const router = express.Router();
const {login} = require('../controllers/users.controller');
const User = require('../models/User');

router.post('/login', async (req, res) => {
    await login(req, res);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
        throw new Error('User not found');
    }
    res.status(200).json(user);
});

module.exports = router;