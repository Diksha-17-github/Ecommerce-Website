const db = "mongodb+srv://atlascluster.7iabg61.mongodb.net/Ayumart";
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");

app.use(express.json());
app.use(cors())
app.use("/api/auth", router);

const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`PORT is running at ${PORT}`);
    });
})