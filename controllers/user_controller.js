const User = require('../models/userModel');

// Follow a user
const followUser = async (req, res) => {
  try {
    const userIdToFollow = req.params.userId;
     const currentUser = await User.findById(req.ID).populate('following'); 
     if (!currentUser) {
      return res.status(401).json({ message: 'Unauthorized' }); 
    }
    if (currentUser && currentUser.following && currentUser.following.includes(userIdToFollow)) {
      return res.status(400).json({ message: 'You are already following this user' });
    }

    currentUser.following = currentUser.following || []; // Initialize as empty array if undefined
  currentUser.following.push(userIdToFollow);

    await currentUser.save();

    const userToFollow = await User.findById(userIdToFollow);
    userToFollow.followers.push(currentUser._id);
    await userToFollow.save();

    res.status(200).json({ message: 'User followed successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};


// Unfollow a user
const unfollowUser = async (req, res) => {
  try {
    const userIdToUnfollow = req.params.userId;
    const currentUser = req.user; // Assuming you have middleware to extract the current user from JWT

    if (!currentUser.following.includes(userIdToUnfollow)) {
      return res.status(400).json({ message: 'You are not following this user' });
    }

    currentUser.following = currentUser.following.filter(id => id !== userIdToUnfollow);
    await currentUser.save();

    const userToUnfollow = await User.findById(userIdToUnfollow);
    userToUnfollow.followers = userToUnfollow.followers.filter(id => id !== currentUser._id);
    await userToUnfollow.save();

    res.status(200).json({ message: 'User unfollowed successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};


// Get users that the current user is following
const getFollowingUsers = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming you have middleware to extract the current user from JWT
    const currentUser = await User.findById(req.ID).populate('following', 'username');
    res.status(200).json(currentUser.following);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};


// Get users who are following the current user
const getFollowers = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming you have middleware to extract the current user from JWT
    const currentUser = await User.findById(req.ID).populate('followers', 'username');
    res.status(200).json(currentUser.followers);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { followUser, unfollowUser, getFollowingUsers, getFollowers };
