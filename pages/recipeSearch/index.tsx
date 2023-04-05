import React, { useEffect } from 'react';
import RecipeSearchMain from '../../components/recipeSearch/RecipeSearchMain';

// export async function getStaticProps() {
//     const getRecipeData = await fetch('http://localhost:3000/api/recipe/recipeData', {
//         headers: {
//             Accept: 'application/json, text/plain, */*',
//             'User-Agent': '*',
//           },
//     }).then(res => {
//         return res.json()
//     });
//     const resData = JSON.stringify(getRecipeData);
//     return {
//         props: {
//             resData
//         }
//     }
// }

const RecipeSearch = () => {
    
    return (
        <>
            <RecipeSearchMain/>
        </>
    );
};

export default RecipeSearch;