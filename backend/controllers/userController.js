const User = require('../models/User');

exports.getUsers = async (req, res) => {
    const users = await User.find().sort({ totalPoints: -1 });
    res.json(users);
};

exports.addUser = async (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: 'Name required' });
    const user = new User({ name });
    await user.save();
    res.status(201).json(user);
}; 