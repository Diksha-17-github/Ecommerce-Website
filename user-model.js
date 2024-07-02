const { default: mongoose } = require("mongoose");
const jwt = require("jsonwebtoken");
const bycrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }, 

    email: {
        type: String, 
        required: true
    }, 

    password: {
        type: String, 
        required: true
    },
    
    isAdmin: {
        type: Boolean,
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

userSchema.pre('save', async function(next){
    console.log("Hi, I am pre")
    if(this.isModified('password')){
        console.log("Hi, I am pre password");
        this.password = await bycrypt.hash(this.password, 12);
    }
    next();
})

userSchema.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}

const User = new mongoose.model("User", userSchema);
module.exports = User;