import React from 'react';
import RoundExplanation from './roundExplanation';
import * as S from '../style/recipeSection/recipeSection';
import RoundExplanation2 from './refactor/roundExplanation'
import RecipeSectionText from './refactor/recipeSectionText'
const RecipeSection = () => {
    return (
        <>
            <S.RecipeSectionContain>
                {/* <RoundExplanation/> */}
                <RoundExplanation2/>
                <RecipeSectionText/>
            </S.RecipeSectionContain>   
        </>
    );
};

export default RecipeSection;