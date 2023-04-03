import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import { contentTitle, explanation } from '../../../utils/main/constants';
import * as S from '../style/recipeSection/roundExplanation';

const RoundExplanationContent = () => {
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