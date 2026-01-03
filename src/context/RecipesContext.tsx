import { createContext, useEffect, useState } from "react";
import { recipes as initialRecipes } from "../constants/data";
import type { RecipeCardProp, RecipesContextType } from "../types/types";

// eslint-disable-next-line react-refresh/only-export-components
export const RecipesContext = createContext<RecipesContextType>({
  recipes: [],
  addRecipe: () => {},
  removeRecipe: () => {},
});

export const RecipesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  //  load recipes from local storage once
  const [recipes, setRecipes] = useState<RecipeCardProp[]>(() => {
    const stored = localStorage.getItem("recipes");
    return stored ? JSON.parse(stored) : initialRecipes;
  });

  // Syncing UI with local storage
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (recipe: RecipeCardProp) => {
    setRecipes((prev) => [...prev, recipe]);
  };

   const removeRecipe = (title: string) => {
    setRecipes((prev) => prev.filter((r) => r.title !== title));
  };

  return (
    <RecipesContext.Provider value={{ recipes, addRecipe , removeRecipe }}>
      {children}
    </RecipesContext.Provider>
  );
};
