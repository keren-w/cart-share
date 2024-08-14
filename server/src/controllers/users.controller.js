const User = require('../models/User');

const login = async (req, res) => {
    const { username } = req.body;
    try {
        const user = await User.login(username);
        res.status(200).json(user);
    } catch (err) {
        res.status(401).json({ message: err.message }); //no document found or no valid document?
    }
};


module.exports = { login };