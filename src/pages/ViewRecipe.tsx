import { Link, useParams } from "react-router-dom";
import { recipes } from "../constants/data";
import { HiBookmarkSlash } from "react-icons/hi2";
import { BiArrowBack } from "react-icons/bi";
import { difficultyColor } from "../util/util";

const ViewRecipe = () => {
  const { title } = useParams<{ title: string }>();

  const recipe = recipes.find((r) => r.title === title);

  {/* Render Case : If no recipe was found */}
  if (!recipe) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4">
        <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-violet-200 shadow-md">
          <HiBookmarkSlash className="w-10 h-10 sm:w-12 sm:h-12 text-violet-600" />
        </div>
        <p className="text-violet-900 text-xl sm:text-2xl font-lora text-center max-w-md leading-relaxed">
          No recipe with that title was found.
        </p>
        <Link
          to="/"
          className="mt-2 px-5 py-2 rounded-md bg-violet-600 text-white font-semibold hover:bg-violet-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8">
      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 sm:h-96 object-cover rounded-lg shadow-md mb-6"
      />

      {/* Recipe Title & Meta */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">{recipe.title}</h1>
        <div className="flex flex-wrap gap-4 text-sm sm:text-base text-gray-600 items-center">
          <span
            className={`px-2 py-1 rounded font-semibold ${difficultyColor(
              recipe.difficulty
            )}`}
          >
            {recipe.difficulty}
          </span>
          {recipe.servings && <span>Servings: {recipe.servings}</span>}
          <span>Prep Time: {recipe.time} min</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Recipe Ingredients */}
        {recipe.ingredients && (
          <div>
            <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Recipe Instructions */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      {/* Back to Home Page */}
      <div className="py-10">
        <Link to="/" className="btn-primary flex-center">
          <div className="flex items-center space-x-3">
            <BiArrowBack />
            <span>Back to Recipes</span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ViewRecipe;