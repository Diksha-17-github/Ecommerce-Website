const express = require("express");
const router = express.Router();
const Cart = require("../models/cartProducts-model");

const cart = async(req, res) =>{
    try {
        const {product, title, price, quantity, total} = req.body;

        const cartItem = await Cart.create({product, title, price, quantity, total});
        res.status(200).json({message: cartItem})
    } catch (error) {
        console.log(error);
    }
};

module.exports={cart};