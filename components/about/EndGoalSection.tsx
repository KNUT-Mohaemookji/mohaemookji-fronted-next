import React from 'react';
import * as S from './style/missionSection';

const EndGoalSection = () => {
    const missions = [
        '- 사용자들이 쉽고 빠르게 요리를 할 수 있도록 하기.',
        '- 원하는 요리에 맞는 영상 제공하기',
        '- 내 위치 주변에 있는 마트 정보들 시각화 시켜주기'
    ]
    return (
        <>
            <S.MissionContainer>
                <S.Inner>
                    <S.MissionImage/>
                    <S.Content>
                        <S.Title>E n d G o a l .</S.Title>
                        <S.Line />
                        <S.Missions>
                            {
                                missions.map((mission, index) => {
                                    return <S.Mission key={index}>{mission}</S.Mission>
                                })
                            }
                        </S.Missions>
                    </S.Content>
                </S.Inner>
            </S.MissionContainer>
        </>
    );
};

export default EndGoalSection;