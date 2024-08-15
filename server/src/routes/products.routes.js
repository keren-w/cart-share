const express = require('express');
const router = express.Router();
const {getAllProducts} = require('../controllers/products.controller');

router.get('/', async (req, res) => {
    await getAllProducts(req, res);
});

module.exports = router;