const express = require('express');
const router = express.Router();
const { createPost, viewUserPosts, updatePost, deletePost } = require('../controllers/post_function');
const { followUser, unfollowUser, getFollowingUsers, getFollowers } = require('../controllers/user_controller');

const authMiddleware = require('../utils/verifyUser')

// Create a new post
router.post('/create', authMiddleware, createPost);

// View all posts of a user
router.get('/view/:userId', viewUserPosts);

// Update a post
router.put('/update/:postId', authMiddleware, updatePost);

// Delete a post
router.delete('/delete/:postId', authMiddleware, deletePost);


// Follow a user
router.post('/follow/:userId', authMiddleware, followUser);

// Unfollow a user
router.post('/unfollow/:userId', authMiddleware, unfollowUser);

// Get users that the current user is following
router.get('/following', authMiddleware, getFollowingUsers);

// Get users who are following the current user
router.get('/followers', authMiddleware, getFollowers);


module.exports = router;
