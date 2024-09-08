import { Request,Response } from "express";
import User from "../models/User"

const createCurrentUser= async (req:Request,res:Response)=>{
     
    try {
          
        const {auth0Id}= req.body;
        const existingUser= await User.findOne({auth0Id});
        // console.log(existingUser)
        if(existingUser){
            return res.status(200).send({massage:"already exist"});
        }
        const newUser=new User(req.body);
        await newUser.save();
         return res.status(201).send(newUser.toObject());
    } catch (error) {
        console.log(error);
        res.status(500).json({massge:"Error Creating user"});
        
    }
};

export default {
    createCurrentUser, 
};