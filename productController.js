const express = require("express");
const router = express.Router();
const User = require("../models/productNotFound-model");

const productReq = async(req, res) =>{
    try {
        const {name, pName, pDesc, phone} = req.body;
        const reqExist = await User.findOne({name: name});

        if(reqExist){
            return res.status(400).json({msg: "We have already take request for this product. I will be made available soon"});
        }

        const ReqCreated = await User.create({name, pName, pDesc, phone});
        res.status(200).json({message: ReqCreated})
    } catch (error) {
        console.log(error);
    }
};

module.exports={productReq};