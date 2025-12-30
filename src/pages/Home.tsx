import Hero from "../components/Hero"
import RecipeGrid from "../components/RecipeGrid"
import SearchInput from "../components/SearchInput"

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