const User = require('../models/userModel');

const viewUserProfile = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Find the user by ID and retrieve their profile
    const userProfile = await User.findById(userId);

    if (!userProfile) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(userProfile);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports=viewUserProfile