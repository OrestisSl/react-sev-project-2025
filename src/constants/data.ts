import { LuChefHat , LuPlus } from "react-icons/lu";
import type { RecipeCardProp } from "../types/types";

export const navItems = [
  { label: "Recipes", link: "/" , icon: LuChefHat },
  { label: "Create", link: "/create-recipe", icon:  LuPlus},
];

export const recipes:RecipeCardProp[] = [
  {
    title: "Creamy Garlic Pasta",
    image: "https://placehold.co/400",
    time: "25 min",
    difficulty: "Easy",
  },
  {
    title: "Avocado Toast Deluxe",
    image: "https://placehold.co/400",
    time: "10 min",
    difficulty: "Easy",
  },
  {
    title: "Berry Smoothie Bowl",
    image: "https://placehold.co/400",
    time: "8 min",
    difficulty: "Medium",
  },
];