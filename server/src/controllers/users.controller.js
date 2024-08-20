const User = require('../models/User');

const login = async (req, res) => {
    const { username } = req.body;
    try {
        const user = await User.login(username);
        if (!user) {
            throw new Error('User not found');
        }
        res.status(200).json({id: user._id, name: user.name});
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
};

module.exports = { login };