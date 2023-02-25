const express = require("express");
const RecipeModel = require("../models/recipe");
const rec_router = express.Router();
const uploader = require("../multer");
const cloudinary = require("../cloudinary/cloudinary");
const bodyparser = require("body-parser");
rec_router.use(bodyparser.json());
rec_router.post("/recipe",uploader.single('file'), async(req, res)=>{
    try {
        const upload = await cloudinary.v2.uploader.upload(req.file.path);
        const recipies = await RecipeModel.create({
            title:req.body.title,
            author:req.body.author,
            file:upload.secure_url,
            ingredients:req.body.ingredients,
            direction:req.body.direction,
            user:req.user
        })
        res.status(200).json({
            status:"success",
            recipies
        })
    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
});

rec_router.get("/recipe", async(req, res)=>{
    try {
        const recipies = await RecipeModel.find({user:req.user});
        if(recipies.length){
            res.status(200).json({
                status:"success",
                recipies
            })
        }else{
            res.status(400).json({
                status:"failed",
                message:"page not found"
            })
        }
    } catch (error) {
        res.json({
            message:error.message
        })
    }
})
module.exports = rec_router;