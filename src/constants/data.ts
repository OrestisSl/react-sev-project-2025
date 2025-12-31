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
    servings: 2,
    ingredients: [
      "200g pasta",
      "2 tbsp butter",
      "3 cloves garlic, minced",
      "100ml cream",
      "50g parmesan cheese",
      "Salt & pepper to taste",
    ],
    instructions: [
      "Cook pasta according to package instructions.",
      "Melt butter in a pan and sauté garlic until fragrant.",
      "Add cream and simmer for 2-3 minutes.",
      "Mix in parmesan cheese until melted.",
      "Combine pasta with sauce and season with salt & pepper.",
      "Serve warm.",
    ],
  },
  {
    title: "Avocado Toast Deluxe",
    image:
      "https://media.istockphoto.com/id/1139597774/photo/toast-with-mashed-avocado-arugula.jpg?s=612x612&w=0&k=20&c=MXJpDlUCAMVnHCIuO6d4uq8iRXrJXegAYkGeuoTd5Wc=",
    time: 10,
    difficulty: "Easy",
    servings: 1,
    ingredients: [
      "2 slices of bread",
      "1 ripe avocado",
      "Handful of arugula",
      "1 tsp olive oil",
      "Salt & pepper to taste",
      "Chili flakes (optional)",
    ],
    instructions: [
      "Toast the bread slices until golden brown.",
      "Mash the avocado and season with salt, pepper, and olive oil.",
      "Spread avocado on toast and top with arugula.",
      "Sprinkle chili flakes if desired and serve immediately.",
    ],
  },
  {
    title: "Berry Smoothie Bowl",
    image:
      "https://media.istockphoto.com/id/1305291791/photo/mixed-berries-smoothie-bowl-on-rustic-wooden-table.jpg?s=612x612&w=0&k=20&c=qKBpDbUKEF3D_H48-cgItaG50brnYvQ_0JIU9gybQho=",
    time: 8,
    difficulty: "Medium",
    servings: 1,
    ingredients: [
      "1 cup mixed berries (strawberries, blueberries, raspberries)",
      "1 banana",
      "1/2 cup yogurt",
      "1/4 cup granola",
      "1 tsp honey",
    ],
    instructions: [
      "Blend the berries, banana, and yogurt until smooth.",
      "Pour into a bowl and top with granola.",
      "Drizzle honey on top.",
      "Serve immediately.",
    ],
  },
];
