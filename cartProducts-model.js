const { default: mongoose } = require("mongoose");
const jwt = require("jsonwebtoken");

const cartProducts = new mongoose.Schema({
    product: {
        type: String, 
    }, 

    title: {
        type: String, 
    }, 

    price: {
        type: Number, 
    },
    
    quantity: {
        type: Number,
    },

    total: {
        type: Number,
    },

    tokens: [
        {
            token: {
                type: String, 
                required: true
            }
        }
    ]
});

cartProducts.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}

const cartProduct = new mongoose.model("Cart", cartProducts);
module.exports = cartProduct;