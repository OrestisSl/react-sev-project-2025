import { LuChefHat, LuPlus } from "react-icons/lu";
import type { RecipeCardProp } from "../types/types";

export const navItems = [
  { label: "Recipes", link: "/", icon: LuChefHat },
  { label: "Create", link: "/create-recipe", icon: LuPlus },
];

export const recipes: RecipeCardProp[] = [
  {
    title: "Creamy Garlic Pasta",
    image:
      "https://www.allrecipes.com/thmb/QiGptPjQB5mqSXGVxE4sLPMJs_4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-269500-creamy-garlic-pasta-Beauties-2x1-bcd9cb83138849e4b17104a1cd51d063.jpg",
    time: 25,
    difficulty: "Easy",
  },
  {
    title: "Avocado Toast Deluxe",
    image:
      "https://media.istockphoto.com/id/1139597774/photo/toast-with-mashed-avocado-arugula.jpg?s=612x612&w=0&k=20&c=MXJpDlUCAMVnHCIuO6d4uq8iRXrJXegAYkGeuoTd5Wc=",
    time: 10,
    difficulty: "Easy",
  },
  {
    title: "Berry Smoothie Bowl",
    image:
      "https://media.istockphoto.com/id/1305291791/photo/mixed-berries-smoothie-bowl-on-rustic-wooden-table.jpg?s=612x612&w=0&k=20&c=qKBpDbUKEF3D_H48-cgItaG50brnYvQ_0JIU9gybQho=",
    time: 8,
    difficulty: "Medium",
  },
];