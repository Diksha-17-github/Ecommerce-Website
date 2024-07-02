const { default: mongoose } = require("mongoose");
const jwt = require("jsonwebtoken");

const ProductNotFoundSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }, 

    pName: {
        type: String, 
        required: true
    }, 

    pDesc: {
        type: String, 
        required: true
    },
    
    phone: {
        type: Number,
        default: false
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

ProductNotFoundSchema.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}

const ProductNotAvailable = new mongoose.model("Product", ProductNotFoundSchema);
module.exports = ProductNotAvailable;