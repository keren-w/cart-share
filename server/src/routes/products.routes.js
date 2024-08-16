const express = require('express');
const router = express.Router();
const {getAllProducts} = require('../controllers/products.controller');
const Product = require('../models/Item');

router.get('/', async (req, res) => {
    await getAllProducts(req, res);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        throw new Error('Cart not found');
    }
    res.status(200).json(product);
});


module.exports = router;