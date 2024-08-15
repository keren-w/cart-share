const Cart = require('../models/Cart');

const getAllCarts = async (req, res) => {
    try {
        const carts = await Cart.find();
        if (!carts) {
            throw new Error('No carts found');
        }
        res.status(200).json(carts);
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
};


module.exports = { getAllCarts };