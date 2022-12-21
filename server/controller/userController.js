import mongoose from "mongoose";
import User from "../Model/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const signIn = async (req,res)=>{
const {email,password} = req.body;
try {

    const existingUser = await User.findOne({email});
    if(!existingUser) return res.status(404).json({message:"User dosen't exists !!!"});
    const isPasswordcorrect = await bcrypt.compare(existingUser.password,password);
    if(!isPasswordcorrect) return res.status(400).json({message:"Wrong credentials !!!"});
    
    const Token = jwt.sign({email:existingUser.email,id:existingUser._id},test,{expiresIn:"1h"});
    res.status(200).json({result:existingUser,Token})
    
} catch (error) {
    res.status(500).json({message:"Something went wrong"});
}


}

export const signUp = async (req,res)=>{
   const {firstname,lastname,email,password,confirmpassword} = req.body;
   try {
       const existingUser = await User.findOne({email});
       if(existingUser) return res.status(400).json({message:"User already exists !!!"});
       if(password !== confirmpassword) return res.status(400).json({message:"Password not match"})
       const name = firstname.concat(" ",lastname);
       password = await bcrypt.hash(password,10);
       const user = await User.create({name,email,password});
       const Token = jwt.sign({email:user.email,id:user._id},test,{expiresIn:"1h"});
       res.status(200).json({result:user,Token});
       
   } catch (error) {
    res.status(500).json({message:"Something went wrong"});
   }

}