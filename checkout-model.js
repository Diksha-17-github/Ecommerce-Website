const { default: mongoose } = require("mongoose");
const jwt = require("jsonwebtoken");

const CheckoutSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }, 

    email: {
        type: String, 
        required: true
    }, 

    address: {
        type: String, 
        required: true
    },
    
    phone: {
        type: Number,
        default: false
    },

    city: {
        type: String, 
        required: true
    },

    state: {
        type: String, 
        required: true
    },

    pincode: {
        type: String, 
        required: true
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

CheckoutSchema.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}

const CheckoutProducts = new mongoose.model("Checkout", CheckoutSchema);
module.exports = CheckoutProducts;