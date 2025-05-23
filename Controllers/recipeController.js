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
