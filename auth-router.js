const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const router = express.Router();
const authControllers = require("../controllers/controller");
const User = require("../models/user-model");
const Product = require("../models/productNotFound-model");
const Cart = require("../models/cartProducts-model");
const Checkout = require("../models/checkout-model");
const CheckoutController = require("../controllers/checkoutController");

router.post("/login", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(422).json({ error: "Please fill fields properly" });
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "User already exists" });
        }
        else {
            const user = new User({ name, email, password });
            await user.save();
            res.status(201).json({ message: "User registered successfully" });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post("/signIn", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please fill data" });
        }

        const userLogin = await User.findOne({ email: email });

        if (!userLogin) {
            return res.status(400).json({ error: "Invalid Credentials" });
        }

        const isMatch = await bcrypt.compare(password, userLogin.password);

        if (isMatch) {
            const token = await userLogin.generateAuthToken();
            console.log(token);

            // res.cookie("jwtoken", token, {
            //     expires: new Date(Date.now() + 25892000000),
            //     httpOnly: true
            // });

            res.json({ message: "User signin successfully" });
        } else {
            res.status(400).json({ error: "Invalid Credentials" });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post("/productNotFound", async (req, res) => {
    const { name, pName, pDesc, phone } = req.body;

    if (!name || !pName || !pDesc || !phone) {
        return res.status(422).json({ error: "Please fill fields properly" });
    }

    try {
        const requestExist = await Product.findOne({ pName: pName });

        if (requestExist) {
            return res.status(422).json({ message: "We already have this product request. We will take care of it as early as possible" });
        }
        else {
            const product = new Product({ name, pName, pDesc, phone });
            await product.save();
            res.status(201).json({ message: "We will make this product available to its earliest" });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post("/cart", async (req, res) => {
    const { cartData } = req.body;
  
    if (!cartData || !Array.isArray(cartData) || cartData.length === 0) {
      return res.status(422).json({ error: "Cart data is not proper. Code error" });
    }
  
    try {
      for (const product of cartData) {
        const { id, name, price, quantity } = product;
        const cart = new Cart({ product: id, title: name, price, quantity, total: price * quantity });
        await cart.save();
      }
  
      res.status(201).json({ message: "Order saved" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

router.post("/checkout", async (req, res) => {
    const {name, email, address, phone, city, state, pincode} = req.body;

    if (!name || !email || !address || !phone || !city || !state || !pincode) {
        return res.status(422).json({ error: "Fill details properly" });
    }

    try {
        const checkout = new Checkout({ name, email, address, phone, city, state, pincode });
        await checkout.save();
        res.status(201).json({ message: "Order saved" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
