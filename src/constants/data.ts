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
  {
    title: "Spicy Chicken Tacos",
    image:
      "https://rms-media-prod.generalmills.com/d2601ae9-1f63-49fe-9703-196caf914edf.jpg",
    time: 20,
    difficulty: "Medium",
    servings: 3,
    ingredients: [
      "6 small tortillas",
      "300g chicken breast, sliced",
      "1 tsp chili powder",
      "1/2 tsp paprika",
      "1/2 cup shredded lettuce",
      "1/4 cup diced tomatoes",
      "2 tbsp sour cream",
    ],
    instructions: [
      "Season chicken with chili powder and paprika.",
      "Cook chicken in a skillet until done.",
      "Warm tortillas and fill with chicken.",
      "Top with lettuce, tomatoes, and sour cream.",
      "Serve immediately.",
    ],
  },
  {
    title: "Chocolate Chip Cookies",
    image:
      "https://assets.bonappetit.com/photos/58e2844b65366d7ba90812ea/master/pass/0417-Brown-Butter-Toffee-ChocolateChip%20Cookie-group.jpg",
    time: 30,
    difficulty: "Easy",
    servings: 4,
    ingredients: [
      "1 cup butter, softened",
      "1 cup sugar",
      "2 cups flour",
      "1 tsp baking soda",
      "1 tsp vanilla extract",
      "1 cup chocolate chips",
    ],
    instructions: [
      "Preheat oven to 180°C.",
      "Cream butter and sugar together.",
      "Mix in flour, baking soda, and vanilla.",
      "Fold in chocolate chips.",
      "Scoop dough onto baking sheet and bake 10-12 minutes.",
      "Cool and serve.",
    ],
  },
  {
    title: "Beef Stir Fry",
    image:
      "https://www.allrecipes.com/thmb/7N-Xq1XMMJw8G0KJv2e0ETUYB2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228823-quick-beef-stir-fry-DDMFS-4x3-1f79b031d3134f02ac27d79e967dfef5.jpg",
    time: 18,
    difficulty: "Hard",
    servings: 3,
    ingredients: [
      "300g beef strips",
      "1 bell pepper, sliced",
      "1 carrot, julienned",
      "2 tbsp soy sauce",
      "1 tsp sesame oil",
      "1 clove garlic, minced",
    ],
    instructions: [
      "Heat oil in a wok and sauté garlic.",
      "Add beef strips and cook until browned.",
      "Add vegetables and stir fry for 5-7 minutes.",
      "Add soy sauce and sesame oil, cook another 2 minutes.",
      "Serve hot with rice or noodles.",
    ],
  },
];
