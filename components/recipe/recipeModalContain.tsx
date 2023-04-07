import React from 'react';
import { useRecipeModalState } from './hooks/useRecipeModalState';
import RecipeModal from './recipeDetailModal/mainModal';
import * as S from './style/recipeModalContain';
import { IRecipeModalContainProps } from './types/recipe/interface';

const RecipeModalContain = ({recipeState, clickRecipeData}: IRecipeModalContainProps) => {
    return (
        <>
        {
            recipeState === true
            ?
            <S.RecipeModal >
                <S.BackgroundBlack/>
                <RecipeModal clickRecipeData={ clickRecipeData } />
            </S.RecipeModal>
            : null
        }
        </>
    );
};

export default RecipeModalContain;