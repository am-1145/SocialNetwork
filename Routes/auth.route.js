const express=require('express')

const router=express.Router();

router.post("/signup",require('../controllers/signup'))
router.post("/signin",require('../controllers/signin'))
// router.post('/google',require('../controllers/google'))
// router.get('/signout',require('../controllers/signOut'))
module.exports=router;