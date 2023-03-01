import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import * as S from './style/recipeTitle';

const RecipeTitle = () => {
    const {query} = useRouter();
    return (
        <>
            <S.RecipeTitleContain>
                <S.Title>검색결과 : <span>{query.slug}</span></S.Title>
            </S.RecipeTitleContain>
        </>
    );
};

export default RecipeTitle;