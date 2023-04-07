import React, { useRef, useState } from 'react';
import * as S from '../../style/recipeSection/refactor/roundExplanation';
import Image from 'next/image';
import useScrollEvent from '../../../common/hooks/useScrollEvent';

const RoundExplanation = () => {
    const watchElement = useRef<HTMLDivElement>(null);
    const [eventState, setEventState] = useState(false);
    useScrollEvent(watchElement, setEventState);
    return (
        <>
            <S.RoundExplanationContain>
                <S.RoundExplanationInner>
                    <S.RecipeContainImage ref={watchElement} eventState={eventState}>
                        <Image
                            src='/img/main/explanationImage.jpg'
                            // fill 속성을 사용해서 RecipeContainImage 에 맞게 가로, 세로 크기 지정.
                            fill
                            alt='recipeSection 이미지'
                        />
                    </S.RecipeContainImage>
                    <S.RoundModel/>
                </S.RoundExplanationInner>
            </S.RoundExplanationContain>
        </>
    );
};

export default RoundExplanation;