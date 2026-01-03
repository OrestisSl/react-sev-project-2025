import { z } from "zod";
import {
  RECIPE_CATEGORIES,
  RECIPE_DIFFICULTIES,
} from "../constants/recipe.constants";

export const recipeSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category: z.enum(RECIPE_CATEGORIES),
  difficulty: z.enum(RECIPE_DIFFICULTIES),
  time: z.number().min(1, "Time must be at least 1 minute"),
  servings: z.number().min(1, "Servings must be at least 1"),
  image: z
    .string()
    .optional()
    .refine(
      (url) =>
        !url ||
        /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|bmp|tiff))$/i.test(url),
      {
        message: "Please provide a valid image URL (jpg, png, gif, webp)",
      }
    ),
  ingredients: z
    .array(z.object({ name: z.string().min(1, "Ingredient cannot be empty") }))
    .min(1, "At least one ingredient is required"),
  instructions: z
    .array(z.object({ step: z.string().min(1, "Instruction cannot be empty") }))
    .min(1, "At least one instruction is required"),
});

export type RecipeFormData = z.infer<typeof recipeSchema>;

export type RecipeFormFieldArrayKeys = "ingredients" | "instructions";
