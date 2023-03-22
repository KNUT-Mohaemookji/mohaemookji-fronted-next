import React, { useEffect } from 'react';
import RecipeTitle from '../../../components/recipe/recipeTitle';
import RecipeListView from '../../../components/recipe/recipeList';
import { IRecipeProps } from '../../../components/recipe/types/interface';
import { RecipeApiUrl, apiUrl } from '../../../utils/constants';


export async function getServerSideProps() {
    let count = 9;
    const recipeData: unknown = await (
        // 절대 url만 지원되기 때문에 api 직접 가져오기.
        await fetch(RecipeApiUrl(count))
    ).json();

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