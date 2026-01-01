import RecipeCard from "./RecipeCard";
import type { RecipeGridProps } from "../types/types";
import NoRecipesUI from "./NoRecipesUI";
import NoSearchResultsUI from "./NoSearchResultsUI";

const RecipeGrid = ({ recipes, searchQuery }: RecipeGridProps) => {
  const hasRecipes = recipes.length > 0;
  const isSearching = !!searchQuery;

  // Render Case : No recipes exis
  if (!hasRecipes && !isSearching) return <NoRecipesUI />;

  // Render Case : No search recipe match found
  if (!hasRecipes && isSearching) return <NoSearchResultsUI />;

  //Render Case : Recipe grid for recipes that exist
  return (
    <section className="py-20 px-6 bg-primary-bg">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
    </section>
  );
};

export default RecipeGrid;