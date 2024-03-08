const User = require('../models/userModel');

const updateUserProfile = async (req, res) => {
  try {
    const userId = req.ID; // Assuming user ID is attached to req.user by middleware
    const { username, bio, profilePicture } = req.body;

    // Find the user by ID and update the profile fields
    const updatedUser = await User.findByIdAndUpdate(userId, { 
      username, 
      bio, 
      profilePicture 
    }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};
module.exports=updateUserProfile