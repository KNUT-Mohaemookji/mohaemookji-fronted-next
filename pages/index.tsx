import MainSection from '../components/main/mainSection/mainSection';
import RecipeSection from '../components/main/recipeSection/recipeSection';
import LastSection from '../components/main/lastSection/lastSection';
import Footer from '../components/main/lastSection/footer';

export default function Home() {
  return (
    <>
      <MainSection/>
      <RecipeSection/>
      <LastSection/>
      <Footer/>
    </>
  )
}
