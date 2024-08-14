const User = require('../models/User');

const login = async (req, res) => {
    const { username } = req.body;
    console.log("username", username);
    try {
        const user = await User.findOne({ "name.firstName": username })
        // const user2 = await user.login(username);
        res.json(user);
        console.log("user", user);
        console.log("user2", user2);
        debugger;
    } catch (err) {
        res.status(401).json({ message: err.message }); //no document found or no valid document?
    }
};


module.exports = { login };