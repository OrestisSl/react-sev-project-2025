export type RecipeDifficulty = "Easy" | "Medium" | "Hard";

export interface RecipeCardProp {
  title: string;
  image: string;
  time: number;
  servings?: number;
  difficulty: RecipeDifficulty;
}