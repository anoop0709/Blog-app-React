import mongoose from "mongoose";
import User from "../Model/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const signIn = async (req,res)=>{
const {email,password} = req.body;
try {

    const existingUser = await User.findOne({email});
    if(!existingUser) return res.status(404).json({message:"User dosen't exists !!!"});
    const isPasswordcorrect = await bcrypt.compare(password,existingUser.password);
    if(!isPasswordcorrect) return res.status(400).json({message:"Wrong credentials !!!"});
    
    const token = jwt.sign({email:existingUser.email,id:existingUser._id},'test',{expiresIn:"1h"});
    res.status(200).json({result:existingUser,token})
    
} catch (error) {
    res.status(500).json({message:"Something went wrong"});
}


}

export const signUp = async (req,res)=>{
    console.log(req.body);
   const {firstname,lastname,email,password,confirmpassword} = req.body;
   try {
       const existingUser = await User.findOne({email});
       if(existingUser) return res.status(400).json({message:"User already exists !!!"});
       if(password !== confirmpassword) return res.status(400).json({message:"Password not match"})
       const name = firstname.concat(" ",lastname);
       console.log(name);
       const newpassword = await bcrypt.hash(password,10);
       console.log(newpassword);
       const user = await User.create({name:name,email:email,password:newpassword});
       console.log(user);
       const token = jwt.sign({email:user.email,id:user._id},'test',{expiresIn:"1h"});
       res.status(200).json({result:user,token});
       
   } catch (error) {
    res.status(500).json({message:"Something went wrong"});
   }

}