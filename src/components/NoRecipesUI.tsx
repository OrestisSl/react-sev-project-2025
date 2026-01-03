import { Link } from "react-router-dom";
import noRecipesSvg from "../assets/no_recipes.svg";

const NoRecipesUI = () => {
  return (
    <section className="py-20 px-6 bg-primary-bg">
      <div className="max-w-lg mx-auto flex flex-col items-center justify-center text-center gap-4 rounded-2xl bg-white/5 p-6 sm:p-10 backdrop-blur-sm border-2 border-violet-200 border-dashed">
        <img
          src={noRecipesSvg}
          alt="No recipes"
          className="w-full max-w-xs my-4"
        />
        <h2 className="text-2xl sm:text-3xl font-semibold text-violet-900">
          No recipes yet
        </h2>
        <p className="text-violet-400 text-base leading-relaxed">
          Looks a bit empty here. Once recipes are added, they will appear in
          this section.
        </p>
        <Link
          to="/create-recipe"
          className="mt-4 px-5 py-2 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-500 transition"
        >
          Create Your First Recipe
        </Link>
      </div>
    </section>
  );
};

export default NoRecipesUI;
