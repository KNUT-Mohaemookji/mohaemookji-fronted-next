import React from 'react';
import Image from 'next/image';
import * as S from '../style/recipeSection/roundExplanation';
import { explanationImg } from '../../../utils/main/constants';

const ExplanationImage = () => {
    return (
        <>
            <S.ContentImage>
                <Image
                    src={ explanationImg }
                    width="400"
                    height="400"
                    alt="explanation"
                />
            </S.ContentImage>
        </>
    );
};

export default ExplanationImage;