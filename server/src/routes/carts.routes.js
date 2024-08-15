const express = require('express');
const router = express.Router();
const {getAllCarts} = require('../controllers/carts.controller');

router.get('/', async (req, res) => {
    await getAllCarts(req, res);
});

module.exports = router;