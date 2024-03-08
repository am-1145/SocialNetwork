const User= require("../models/userModel")
 const bcrypt=require('bcrypt');
const erroraHandler = require("../utils/error");
const jwt=require('jsonwebtoken')



const signup=async(req,res,next)=>{
const {username,email,password,bio,profilePicture}=req.body;
const hashedPassword=bcrypt.hashSync(password,10);
const newUser=new User({username,email,password:hashedPassword,bio,profilePicture
})
try{
await newUser.save()
res.status(201).json("User Created Successfully")
}catch(error){
   next(error);
}
}



module.exports=signup
