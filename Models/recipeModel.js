import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  RecipeName: {
    type: String,
    required: true,
  },
  Ingredients: {
    type: String,
    required: true,
  },
  CookTime: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
});

const Recipes = mongoose.model("Recipes", recipeSchema);

export default Recipes;
