import React, { useEffect } from 'react';
import RecipeTitle from '../../../components/recipe/recipeTitle';
import RecipeListView from '../../../components/recipe/recipeList';
import { IRecipeProps } from '../../../components/recipe/types/recipe/interface';
import { RecipeApiUrl, apiUrl } from '../../../utils/constants';
import axios from 'axios';




export async function getServerSideProps() {
    const recipeData: IRecipeProps = await (
        // 절대 url만 지원되기 때문에 api 직접 가져오기.
        // await fetch(RecipeApiUrl(count))
        await fetch(`https://openapi.foodsafetykorea.go.kr/api/${process.env.NEXT_PUBLIC_RECIPE_API_KEY}/COOKRCP01/json/0/${9}`, {
            headers: {
                'Accept': 'application/json'
            }
        })
    ).json();

    return {
        props: {
            recipeData,
            // count
        }
    }
}

const Recipe = ({recipeData}: IRecipeProps) => {
    // const fetchComments = async () => {
    //     const response = await fetch('../../api/comments')
        
    //     if(response.ok){
    //         const comments = await response.json();
    //     }
    // }
    // const recipeData = async () => {
    //     const response: any = await (await fetch("/recipe")).json();
        
    //     console.log(response.COOKRCP01);
    //     return response;
    // }
    // useEffect(() => {
        // console.log(fetch('/api/getRecipe').then(res => console.log(res))
        // (async () => {
        //     await fetch('/api/text').then(res => {
        //         console.log(res);
        //     });
        // })();
    // }, []);
    const props = {
        recipeData
    }
    return (
        <>
            <RecipeTitle/>
            <RecipeListView {...props}/>
        </>
    );
};

export default Recipe;