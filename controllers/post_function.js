const Post = require('../models/postModel');

// Create a new post
const createPost = async (req, res) => {
  try {
    const { textContent } = req.body;
    const userId = req.ID; // Extract Token from Middleware to fetch current user
    console.log(userId);
    const post = new Post({ textContent, user: userId });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};



// View all posts of a user
const viewUserPosts = async (req, res) => {
  try {
    const userId = req.params.userId;
    const posts = await Post.find({ user: userId }).sort({createdAt:-1});
    res.status(200).json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};



// Update a post
const updatePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const { textContent } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(postId, { textContent }, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json(updatedPost);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};



// Delete a post
const deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const deletedPost = await Post.findByIdAndDelete(postId);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { createPost, viewUserPosts, updatePost, deletePost };
