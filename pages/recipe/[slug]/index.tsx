import React, { useEffect } from 'react';
import RecipeListView from '../../../components/view/recipe/recipeListView';

export async function getServerSideProps() {
    let count = 9;
    const recipeData: unknown = await(
        await fetch(`https://openapi.foodsafetykorea.go.kr/api/360e29b086e142e4856b/COOKRCP01/json/0/${count}`)
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
const Resipe = ({recipeData, count}) => {
    const props = {
        recipeData,
        count,
        // moreButton
    }
    useEffect(() => {

    })
    return (
        <>
            <RecipeListView {...props}/>
        </>
    );
};

export default Resipe;