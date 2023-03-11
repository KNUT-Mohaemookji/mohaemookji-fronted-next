import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import * as S from '../style/recipeSection/roundExplanation';

const RoundExplanationContent = () => {
    const contentTitle = '다양한 레시피를 보면서 완벽한 요리를 만들어 봐요!';
    const explanation = '4가지의 카테고리를 기준으로 다양한 음식 영상들이 있어요.';
    
    return (
        <>
          <S.BackBlackColor/>
            <S.Text>
                <S.Title>{contentTitle}</S.Title>
                <S.Explanation>{explanation}</S.Explanation>
                <S.ExplanationButton><FiArrowUpRight/></S.ExplanationButton>
            </S.Text>
        </>
    );
};

export default RoundExplanationContent;