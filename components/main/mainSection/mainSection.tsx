import React from 'react';
import MainText from './mainText';
import UrlChangeButton from '../../common/urlChangeButton';
import MainNotice from './mainNotice';
import MainCarousel from './mainCarousel';
import * as S from '../style/mainSection/mainSection';

const MainSection = () => {
    return (
        <>
            <S.MainSectionContain>
                <S.MainLeft>
                    <MainText />
                    <UrlChangeButton text="요리하러 가기!" url="/recipeSearch" />
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