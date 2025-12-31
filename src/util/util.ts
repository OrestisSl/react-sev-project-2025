import type { RecipeDifficulty } from "../types/types";

export const difficultyColor = (difficulty: RecipeDifficulty) => {
  switch (difficulty) {
    case "Easy":
      return "bg-green-200 text-green-800";
    case "Medium":
      return "bg-yellow-200 text-yellow-800";
    case "Hard":
      return "bg-red-200 text-red-800";
    default:
      return "bg-gray-200 text-gray-800";
  }
};
