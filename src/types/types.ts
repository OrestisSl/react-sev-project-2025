export type RecipeDifficulty = "Easy" | "Medium" | "Hard";

export interface RecipeCardProp {
  title: string;
  image: string;
  time: number;
  servings?: number;
  ingredients?: string[];
  instructions?: string[];
  difficulty: RecipeDifficulty;
}

export type RecipeCategory =
  | "Breakfast"
  | "Lunch"
  | "Dinner"
  | "Dessert"
  | "Snack"
  | "Appetizer";

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
};

export interface RecipeGridProps  {
  recipes: RecipeCardProp[];
  searchQuery: string;
};
