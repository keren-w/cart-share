const Product = require('../models/Item');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        if (!products) {
            throw new Error('No products found');
        }
        res.status(200).json(products);
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
};


module.exports = { getAllProducts };