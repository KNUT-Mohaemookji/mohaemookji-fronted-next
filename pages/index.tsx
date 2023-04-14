import MainSection from '../components/main/mainSection/mainSection';
import RecipeSection from '../components/main/recipeSection/recipeSection';
import LastSection from '../components/main/lastSection/lastSection';

export function Home() {
  return (
    <>
      <MainSection/>
      <RecipeSection/>
      <LastSection/>
    </>
  )
}

export default Home;