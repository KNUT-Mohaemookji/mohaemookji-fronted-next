import React from 'react';
import MainText from './mainText';
import MainButton from './mainButton';
import MainNotice from './mainNotice';
import MainCarousel from './mainCarousel';

import * as S from '../style/mainSection/mainSection';

const MainSection = () => {
    return (
        <>
            <S.MainSectionContain>
                <S.MainLeft>
                    <MainText />
                    <MainButton />
                    <MainNotice />
                </S.MainLeft>
                <S.MainRight>
                    <MainCarousel />
                </S.MainRight>
            </S.MainSectionContain>
        </>
    );
};

export default MainSection;