import { LuChefHat, LuPlus } from "react-icons/lu";
import type { RecipeCardProp } from "../types/types";

export const navItems = [
  { label: "Recipes", link: "/", icon: LuChefHat },
  { label: "Create", link: "/create-recipe", icon: LuPlus },
];

export const DEFAULT_IMAGE =
  "https://worldfoodtour.co.uk/wp-content/uploads/2013/06/neptune-placeholder-48.jpg";

export const recipes: RecipeCardProp[] = [];