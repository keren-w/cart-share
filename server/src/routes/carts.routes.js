const express = require('express');
const router = express.Router();
const {getAllCarts} = require('../controllers/carts.controller');
const Cart = require('../models/Cart');

router.get('/', async (req, res) => {
    await getAllCarts(req, res);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const cart = await Cart.findById(id);
    if (!cart) {
        throw new Error('Cart not found');
    }
    res.status(200).json(cart);
});

module.exports = router;