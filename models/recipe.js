const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    title:{type:String},
    author:{type:String},
    file:{type:String},
    ingredients:{type:String},
    direction:{type:String},
    user:{type:String, ref:"users"}
})

const RecipeModel = mongoose.model("recipe", RecipeSchema);
module.exports = RecipeModel;