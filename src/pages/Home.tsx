import { useState } from "react";
import { Hero, SearchInput, RecipeGrid } from "../components";
import { recipes } from "../constants/data";

const Home = () => {
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  const recipesExist = recipes.length > 0;

  return (
    <main className="min-h-screen">
      <Hero />
      {recipesExist && <SearchInput value={search} onChange={setSearch} />}
      <RecipeGrid recipes={filteredRecipes} searchQuery={search} />
    </main>
  );
};

export default Home;
