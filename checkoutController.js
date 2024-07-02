const express = require("express");
const router = express.Router();
const CheckoutProducts = require("../models/checkout-model");

const checkout = async(req, res) =>{
    try {
        const {name, email, address, phone, city, state, pincode} = req.body;

        const checkoutproducts = await User.create({name, email, address, phone, city, state, pincode});
        res.status(200).json({message: checkoutproducts})
    } catch (error) {
        console.log(error);
    }
};

module.exports={checkout};