import React, { useState } from 'react';
import useParallax from './hook/useParallax';
import * as S from '../style/lastSection/lastSection';

const LastSection = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    // window가 undefined 에러가 생길 때 사용하는 방법 typeof window !== 'undefined' ? window.~~ : null;
    const [outerHeight, setOuterHeight] = useState(typeof window !== 'undefined' ? window.outerHeight : 0);
    useParallax(setScrollPosition);
    return (
        <>
            <S.LastSectionContainer
                style={{
                    backgroundImage: `url(${'/img/main/lastSectionBackImage.jpeg'})`, 
                    // 자연스럽게 변경되도록 + 너무 확대되지 않도록 수정하기
                    backgroundSize: `${(outerHeight + scrollPosition) - 250}px`
                }}
            >
                <S.DarkBackground/>
                <S.LastSectionContent>
                    <S.TitleText>Test</S.TitleText>
                    <S.SubTitle>SubTest<br/>SubTest</S.SubTitle>
                    <S.LastSectionButton>About</S.LastSectionButton>
                </S.LastSectionContent>
            </S.LastSectionContainer>
        </>
    );
};

export default LastSection;