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

const getBaseCartDataByIds = async (ids) => {
    const carts = await Cart.find({ _id: { $in: ids } });
    // call a schema method to project base cart data: carts.forEach(cart => cart.getBaseCartData()) /users?ids=1,2,3,4,5
    return carts;
};

const getCartById = async (id) => {
    const cart = await Cart.findById(id);
    if (!cart) {
        throw new Error('Cart not found');
    }
    return cart;
};

module.exports = { getAllCarts };