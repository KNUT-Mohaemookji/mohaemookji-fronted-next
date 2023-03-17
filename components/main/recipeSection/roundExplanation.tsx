import React from 'react';
import RoundExplanationContent from './roundExplanationContent';
import RoundExplnationImage from './explanationImage';
import * as S from '../style/recipeSection/roundExplanation';

const RoundExplanation = () => {
    return (
        <>
            <div className="round_explanation_contain">
                <S.Content>
                    <S.ContentItem>
                        <RoundExplanationContent/>
                        <RoundExplnationImage/>
                    </S.ContentItem>
                </S.Content>
            </div>
        </>
    );
};

export default RoundExplanation;