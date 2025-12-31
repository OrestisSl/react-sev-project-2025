import { Link } from "react-router-dom";
import { recipes } from "../constants/data";
import RecipeCard from "./RecipeCard";
import { HiBookmarkSlash } from "react-icons/hi2";

const RecipeGrid = () => {
  const hasRecipes = recipes.length > 0;

  return (
    <section className="py-20 px-6 bg-primary-bg">
      {!hasRecipes ? (
        /* No Recipes  */
        <div className="max-w-md mx-auto flex flex-col items-center justify-center text-center gap-4 rounded-2xl bg-white/5 p-10 backdrop-blur-sm border border-white/10">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10">
            <HiBookmarkSlash className="w-8 h-8 text-violet-600" />
          </div>

          <h2 className="text-2xl font-semibold text-violet-900">No recipes yet</h2>

          <p className="text-violet-400 text-base leading-relaxed">
            Looks a bit empty here. Once recipes are added, they will appear in
            this section.
          </p>

          
          <Link to="/create-recipe" className="mt-4 px-5 py-2 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-500 transition">
            Create your first recipe
          </Link>
         
        </div>
      ) : (
        /* Recipe Grid */
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} {...recipe} />
          ))}
        </div>
      )}
    </section>
  );
};

export default RecipeGrid;
