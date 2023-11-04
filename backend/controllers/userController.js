import express from 'express'
import User from '../models/userModel.js';


export const signups = async (req, res) => {
    try{
     const {name, email, password } = req.body;
     const newUser = await User.create({name, email, password});
    // await newUser.save()
     
     res.status(201).json({message: 'User created Successfully'});
    }catch(err){
     console.log(err);
     res.status(500).json(err.message);
    }
 };