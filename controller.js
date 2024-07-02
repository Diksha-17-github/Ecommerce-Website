const express = require("express");
const router = express.Router();
const User = require("../models/user-model");

const login = async(req, res) =>{
    try {
        // console.log(req.body);
        const {name, email, password} = req.body;
        const userExist = await User.findOne({name: name});

        if(userExist){
            return res.status(400).json({msg: "User already exist"});
        }

        const UserCreated = await User.create({name, address, password});
        res.status(200).json({message: UserCreated})
    } catch (error) {
        console.log(error);
    }
};

module.exports={login};