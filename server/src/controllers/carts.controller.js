const mongoose = require('mongoose');
const Cart = require('../models/Cart');
const {transformId} = require('../models/utils');

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

const getCartsForUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const userID = mongoose.Types.ObjectId.createFromHexString(userId.toString());
        const carts = await Cart.aggregate([
            {
                $facet: {
                    ownedCarts: [
                        { $match: { owner: userID } },
                        { $project: Cart.getCartMetadata() }
                    ],
                    followedCarts: [
                        { $match: { following: userID } },
                        { $project: Cart.getCartMetadata() }
                    ]
                }
            }
        ]);

        res.status(200).json({
            carts: {
                owned: transformId(carts[0].ownedCarts),
                following: transformId(carts[0].followedCarts)
            }
        });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getAllCarts, getCartsForUser };