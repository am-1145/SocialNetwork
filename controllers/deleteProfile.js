const User = require('../models/userModel');

const deleteUserProfile = async (req, res) => {
  try {
    const userId = req.ID; // Assuming user ID is attached to req.user by middleware

    // Find the user by ID and delete their profile
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User profile deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};


module.exports=deleteUserProfile