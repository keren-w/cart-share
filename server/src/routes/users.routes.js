const express = require('express');
const router = express.Router();
const {login, getUserProfile} = require('../controllers/users.controller');
const {getCartsForUser} = require('../controllers/carts.controller');
router.post('/login', async (req, res) => {
    await login(req, res);
});

router.get('/:userId', async (req, res) => {
    await getUserProfile(req, res);
});

router.get('/:userId/carts', async (req, res) => {
    await getCartsForUser(req, res);
});

module.exports = router;