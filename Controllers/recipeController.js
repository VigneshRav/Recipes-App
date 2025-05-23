import Recipes from "../Models/recipeModel.js";

//Create Recipe (Post Method)
export const createRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipes(req.body);
    await newRecipe.save(); //saving the details in mongoDB
    res
      .status(200)
      .json({ message: "Recipe created successfully", data: newRecipe });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get All Recipes (Get Method)
export const getAllRecipes = async (req, res) => {
  try {
    const getRecipes = await Recipes.find();
    res.status(200).json({
      message: "All Recipes retrieved successfully",
      data: getRecipes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get A Single Recipe by Id (Get Method)
export const getRecipeById = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const recipeDetails = await Recipes.findById(recipeId);
    if (!recipeDetails) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res
      .status(200)
      .json({ message: "Recipe retrieved successfully", data: recipeDetails });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
