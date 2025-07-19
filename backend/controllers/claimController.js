const User = require('../models/User');
const ClaimHistory = require('../models/ClaimHistory');

exports.claimPoints = async (req, res) => {
    const { userId } = req.body;
    if (!userId) return res.status(400).json({ error: 'userId required' });

    const points = Math.floor(Math.random() * 10) + 1;
    const user = await User.findByIdAndUpdate(
        userId,
        { $inc: { totalPoints: points } },
        { new: true }
    );
    if (!user) return res.status(404).json({ error: 'User not found' });

    const history = new ClaimHistory({ userId, points });
    await history.save();

    res.json({ user, points });
};

exports.getLeaderboard = async (req, res) => {
    const users = await User.find().sort({ totalPoints: -1 });
    const leaderboard = users.map((user, idx) => ({
        rank: idx + 1,
        name: user.name,
        totalPoints: user.totalPoints,
        _id: user._id
    }));
    res.json(leaderboard);

};

exports.getClaimHistory = async (req, res) => {
    const history = await ClaimHistory.find().populate('userId', 'name').sort({ claimedAt: -1 });
    res.json(history);
}; 