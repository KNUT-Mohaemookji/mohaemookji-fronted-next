import React from 'react';
import * as S from './style/aboutMohaemookji';
import img from '../../public/img/main/carousel.jpg';
// import video from './video/aboutVideo.mp4';


const AboutMohaemookji = () => {
    return (
        <>
            <S.MohaemookjiContainer>
                <S.VideoContain>
                    <S.VideoBackground src=''/>
                    <S.DarkBackground/>
                </S.VideoContain>
                <S.Content>
                    <S.Title>모해묵지는,</S.Title>
                    <S.Line/>
                    <S.SubTitle>자취생들의 <S.Thick>요리 레시피, 영상</S.Thick>을 추천해주는 서비스입니다.</S.SubTitle>
                </S.Content>
            </S.MohaemookjiContainer>
        </>
    );
};

export default AboutMohaemookji;