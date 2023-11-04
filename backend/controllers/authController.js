import express from 'express'
import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'

import jwt from 'jsonwebtoken'
import { errorHandler } from '../middelware/errorMiddleware.js'

// /api/user
export const signup = async (req, res, next) => {
   const {name, email, password } = req.body;
  // const salt = await bcrypt.genSaltSync(10);
    
   try{
    const hashPassword = await bcrypt.hashSync(password, 10);
    
    const newUser = await User.create({name, email, password: hashPassword});
    await newUser.save();
    const userId = newUser._id;
    const token = await jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: '7d'});

    res.cookie('jwt', token, {httpOnly: true});
    res.status(201).json(newUser);
   }catch(error){
     next(error)
   }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
 // const salt = await bcrypt.genSaltSync(10);
   
 try{
  const validUser = await User.findOne({email});

  if(!validUser){
    res.status(404).json({message: 'USER not found'});
  }
  const validPassword= await bcrypt.compareSync(password, validUser.password);

  if(!validPassword){
   
    res.status(404).json({message: 'Invalid Credentials'})   
  }

const userId = validUser._id;
const token = await jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: '7d'})
console.log(token);
res.cookie('jwt', token, {httpOnly: true});// httpOnly true, prevent third party to modify cookie
res.status(200).json(validUser);

 }catch(error){
   next(error)
 }
};


