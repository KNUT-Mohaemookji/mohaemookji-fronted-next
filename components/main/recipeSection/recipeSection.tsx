import React from 'react';
import RoundExplanation from './roundExplanation';
import * as S from '../style/recipeSection/recipeSection';

const RecipeSection = () => {
    return (
        <>
            <S.RecipeSectionContain>
                <RoundExplanation/>
            </S.RecipeSectionContain>   
        </>
    );
};

export default RecipeSection;