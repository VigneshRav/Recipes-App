import express from "express";
import {
  createRecipe,
  getAllRecipes,
  getRecipeById,
} from "../Controllers/recipeController.js";

const router = express.Router();

router.post("/create", createRecipe);
router.get("/getdata", getAllRecipes);
router.get("/getdata/:id", getRecipeById);

export default router;
