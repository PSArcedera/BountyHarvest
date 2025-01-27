import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
dotenv.config({path: "../config.env"})

const userRouter = express.Router();
const SALT_ROUNDS = 6

//#1 Get all users
userRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
        const users = await User.find({});
        res.send(users);
    })   
);


//#2 Find a user
userRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const userId = req.params.id
        const user = await User.findById(userId);
        if(user){
            res.send(user);
        }
        else{
            res.status(404).send({message: 'User not found'});
        }
    })  
);

//#3 Create a user
userRouter.post(
    '/newuser',
    expressAsyncHandler(async (req, res) =>{
        const existingEmail = await User.findOne({userEmail: req.body.userEmail});
        if(existingEmail){
            res.send({message: 'Email is already taken'});
        }
        else{
            const hash = await bcrypt.hash(req.body.userPassword, SALT_ROUNDS);
            const newUser = new User({
                userName: req.body.userName,
                userPassword: hash,
                userNumber: req.body.userNumber,
                userEmail: req.body.userEmail,
                userAddress: req.body.userAddress
            });
            const user = await newUser.save();
            res.send({message: 'User Created', user});
        }
    })
)

//#4 Login user
userRouter.post(
    '/signin',
    expressAsyncHandler(async (req, res) =>{
        const user = await User.findOne({userEmail: req.body.userEmail});
        
        if(user){
            let confirmation = await bcrypt.compare(req.body.userPassword, user.userPassword);
            if(confirmation){
                const token = jwt.sign({user}, process.env.SECRETKEY, {expiresIn: "1h"})
                res.json({success: true, token})
            }
            else{
                res.json({success:false, message:"Incorrect password"})
            }
        }
        else{
            res.json({success:false, message:"User not found"})
        }

    })
)

//#5 Update user info
userRouter.put(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if(user){
            userName = req.body.userName;
            userPassword = req.body.userPassword;
            userNumber = req.body.userNumber;
            userEmail = req.body.userEmail;
            userAddress = req.body.userAddress;
            await user.save();
            res.send({message: 'User information updated'});
        }
        else{
            res.status(404).send({message:'User not found'});
        }
    })
)

//#6 Delete a user
userRouter.delete(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if(user){
            await user.remove();
            res.send({message: 'User Deleted'});
        }
        else{
            res.status(404).send({message: 'User not found'});
        }
    })
)
export default userRouter;