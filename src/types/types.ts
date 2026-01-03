import type {
  RECIPE_DIFFICULTIES,
  RECIPE_CATEGORIES,
} from "../constants/recipe.constants";

export type RecipeDifficulty = (typeof RECIPE_DIFFICULTIES)[number];
export type RecipeCategory = (typeof RECIPE_CATEGORIES)[number];

export interface RecipeCardProp {
  title: string;
  image: string;
  time: number;
  servings?: number;
  ingredients?: string[];
  instructions?: string[];
  difficulty: RecipeDifficulty;
  category: RecipeCategory;
}

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export interface RecipeGridProps {
  recipes: RecipeCardProp[];
  searchQuery: string;
}

export type RecipesContextType = {
  recipes: RecipeCardProp[];
  addRecipe: (recipe: RecipeCardProp) => void;
  removeRecipe: (title: string) => void;
};
