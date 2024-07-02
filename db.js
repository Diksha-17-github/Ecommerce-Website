const mongoose = require("mongoose");
// const URI = "mongodb+srv://dikshapimple:dikshapimple@atlascluster.7iabg61.mongodb.net/Ayumart?retryWrites=true&w=majority";

const connectDb = async() =>{
    try {
        await mongoose.connect("mongodb+srv://dikshapimple:dikshapimple@atlascluster.7iabg61.mongodb.net/Ayumart?retryWrites=true&w=majority");
        console.log("connection established");
    } catch (error) {
        console.error("Database connection failed");
        process.exit(0);
    }
}

module.exports = connectDb;