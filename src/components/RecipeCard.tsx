import { Link } from "react-router-dom";
import type { RecipeCardProp } from "../types/types";


const RecipeCard = ({ title ,image ,difficulty ,time }:RecipeCardProp) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-[1.02] ">
      <img src={image} alt="recipe image" className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-lora text-xl font-semibold text-gray-800 line-clamp-1">
          {title}
        </h3>
        <p className="text-gray-700 text-sm">
          {time} mins ⏱ • {difficulty}
        </p>
        <Link to={`/recipe/${title}`} className="mt-2 btn-primary">
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
