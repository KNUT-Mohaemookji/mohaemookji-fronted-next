import React, { useEffect } from 'react';
import RecipeListView from '../../../components/recipe/recipeList';
import { apiUrl } from '../../../utils/constants';
import { IRecipeProps } from '../../../utils/types/interface';

export async function getServerSideProps() {
    let count = 9;
    const recipeData: unknown = await(
        // 절대 url만 지원되기 때문에 api 직접 가져오기.
        await fetch(`https://openapi.foodsafetykorea.go.kr/api/${process.env.NEXT_PUBLIC_RECIPE_API_KEY}/COOKRCP01/json/0/${count}`)
    ).json();
    function moreButton() {
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
            <RecipeListView {...props}/>
        </>
    );
};

export default Recipe;