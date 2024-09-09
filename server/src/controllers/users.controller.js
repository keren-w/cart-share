const User = require('../models/User');

const login = async (req, res) => {
    const { username } = req.body;
    try {
        const user = await User.login(username);
        if (!user) {
            throw new Error('User not found');
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
};

const getUserProfile = async (req, res) => { // User Profile = business profile data
    const { userId } = req.params;
    try {
        const user = await User.getUserProfileData(userId);
        if (!user) {
            throw new Error('User not found');
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
}

module.exports = { login, getUserProfile };