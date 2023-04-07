import React, {useEffect, useRef, useState} from 'react';
import { contentTitle } from '../../../../utils/main/constants';
import * as S from '../../style/recipeSection/refactor/recipeSectionText'
import MainButton from '../../../common/urlChangeButton';
import useScrollEvent from '../../../common/hooks/useScrollEvent';

const MissionSection = () => {
    const watchElement = useRef<HTMLDivElement>(null);
    const [eventState, setEventState] = useState(false);
    useScrollEvent(watchElement, setEventState);

    return (
        <>
            <S.RecipeSectionTextContain>
                <S.Content ref={watchElement}>
                    <S.Title eventState={eventState} >{contentTitle}</S.Title>
                    <S.SubTitle eventState={eventState}>   
                        {contentTitle}
                    </S.SubTitle>
                    <MainButton text="찾으러 가기!" url="/recipeSearch"/>
                </S.Content>
            </S.RecipeSectionTextContain>
        </>
    );
};

export default MissionSection;