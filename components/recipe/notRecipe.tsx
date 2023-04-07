import React from 'react';
import * as S from './style/notRecipe';
import UrlChangeButton from '../common/urlChangeButton';

const notRecipe = () => {
    return (
        <S.NotRecipeContain>
            <S.NotRecipeList>레시피 결과가 없습니다. <br/> 다른 키워드로 검색해주세요!</S.NotRecipeList>
            <UrlChangeButton text="이전으로 이동하기" url="/recipeSearch"/>
        </S.NotRecipeContain>
    );
};

export default notRecipe;