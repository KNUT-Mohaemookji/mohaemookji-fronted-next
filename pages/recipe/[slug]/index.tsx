import RecipeTitle from '../../../components/recipe/recipeTitle';
import RecipeListView from '../../../components/recipe/recipeList';
import { useEffect } from 'react';

const Recipe = () => {
    return (
        <>
            <RecipeTitle/>
            <RecipeListView/>
        </>
    );
};

export default Recipe;