export type RecipeDifficulty = "Easy" | "Medium" | "Hard";

export interface RecipeCardProp {
  title: string;
  image: string;
  time: number;
  servings?: number;
  ingredients?: string[];
  instructions: string[];
  difficulty: RecipeDifficulty;
}

export type RecipeCategory =
  | "Breakfast"
  | "Lunch"
  | "Dinner"
  | "Dessert"
  | "Snack"
  | "Appetizer";
