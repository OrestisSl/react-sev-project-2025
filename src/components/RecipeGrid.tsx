import { recipes } from "../constants/data";
import RecipeCard from "./RecipeCard";


const RecipeGrid = () => {
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
