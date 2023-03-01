import React, { useEffect } from 'react';
import RecipeTitle from '../../../components/recipe/recipeTitle';
import RecipeListView from '../../../components/recipe/recipeList';
import { IRecipeProps } from '../../../components/recipe/types/interface';

export async function getServerSideProps() {
    let count = 9;
    const recipeData: unknown = await (
        // 절대 url만 지원되기 때문에 api 직접 가져오기.
        await fetch(`https://openapi.foodsafetykorea.go.kr/api/${process.env.NEXT_PUBLIC_RECIPE_API_KEY}/COOKRCP01/json/0/${count}`)
    ).json();
    const moreButton = () => {
        count += 9;
    }
    return {
        props: {
            recipeData,
            count
        }
    }
}
const Recipe = ({recipeData, count}: IRecipeProps) => {
    const props = {
        recipeData,
        count,
    }
    return (
        <>
        <RecipeTitle/>
            <RecipeListView {...props}/>
        </>
    );
};

export default Recipe;