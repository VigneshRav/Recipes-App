import Recipes from "../Models/recipeModel.js";

//Create Recipe (POST Method)
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

//Get All Recipes (GET Method)
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

//Get A Single Recipe by Id (GET Method)
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

//Update A Recipe by Id (PUT Method)
export const updateRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const { RecipeName, Ingredients, CookTime, Category } = req.body;
    const result = await Recipes.findByIdAndUpdate(
      { _id: recipeId },
      { RecipeName, Ingredients, CookTime, Category },
      { new: true }
    );
    if (!result) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res
      .status(200)
      .json({ message: "Recipe updated successfully", data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
