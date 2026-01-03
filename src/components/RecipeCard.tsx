import { Link } from "react-router-dom";
import { useContext } from "react";
import { BiTrash } from "react-icons/bi";
import type { RecipeCardProp } from "../types/types";
import { RecipesContext } from "../context/RecipesContext";

const RecipeCard = ({ title, image, difficulty, time }: RecipeCardProp) => {
  const { removeRecipe } = useContext(RecipesContext);

  return (
    <div className="relative group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-[1.02]">
      <button
        onClick={() => removeRecipe(title)}
        className="absolute top-2 right-2 z-10 h-8 w-8 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 text-white opacity-0 group-hover:opacity-100 transition-opacity"
        title="Remove Recipe"
      >
        <BiTrash className="w-4 h-4" />
      </button>

      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-lora text-xl font-semibold text-gray-800 line-clamp-1">
          {title}
        </h3>
        <p className="text-gray-700 text-sm">
          {time} mins ⏱ • {difficulty}
        </p>
        <Link to={`/recipe/${encodeURIComponent(title)}`} className="mt-2 btn-primary">
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;