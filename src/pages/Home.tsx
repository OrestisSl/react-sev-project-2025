import { Hero, SearchInput, RecipeGrid } from "../components"

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero/>
      <SearchInput/>
      <RecipeGrid/>
    </main>
  )
}

export default Home