const express = require("express");
const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
const bodyparser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const reg_router = require("./routes/signin");
const rec_router = require("./routes/recipe");
const app = express();
const port = 8000;
app.use(express.json());
app.use(bodyparser.json());
app.use(cors());
mongoose.connect("mongodb+srv://recipe:project@cluster0.lbi48fy.mongodb.net/?retryWrites=true&w=majority",()=>{
    console.log("connected to DB");
});
app.use("/recipe", (req, res, next)=>{
    try{
        const token = req.headers.authorization;
        if(token){
            const decoded = jwt.verify(token, "secret");
            req.user = decoded.data;
            next();
        }else{
            res.status(401).json({
                status:"failed",
                message:"token is missing"
            })
        }
    }catch(e){
        res.status(401).json({
            status:"failed",
            message:e.message
        })
    }
})
app.use("/", reg_router)
app.use("/", rec_router)
app.listen(port, ()=>{
    console.log(`server on ${port}`);
})