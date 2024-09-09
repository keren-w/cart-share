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

const getCartById = async (id) => {
    const cart = await Cart.findById(id); //users/{userId}
    if (!cart) {
        throw new Error('Cart not found');
    }
    return cart;
};

const getCartsForUser = async (userId) => {
    try {
    const userID = mongoose.Types.ObjectId(userId);
    const carts = await Cart.aggregate([
        {
          $facet: {
            ownedCarts: [
              { $match: { owner: userID } },
              { $project: Cart.getCartProjection() }
            ],
            followedCarts: [
              { $match: { following: userID } },
              { $project: Cart.getCartProjection() }
            ]
          }
        }
      ]);

      res.status(200).json({ ownedCarts: carts[0].ownedCarts, followedCarts: carts[0].followedCarts });
    }    
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getAllCarts, getCartsForUser };