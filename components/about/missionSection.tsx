import React, {useEffect, useRef, useState} from 'react';
import useScrollEvent from '../common/hooks/useScrollEvent';
import * as S from './style/missionAndEndGoalSection';

const MissionSection = () => {
    const watchElement = useRef<HTMLDivElement>(null);
    const [eventState, setEventState] = useState(false);
    
    useScrollEvent(watchElement, setEventState);

    const missions = [
        '- 사용자들이 쉽고 빠르게 요리를 할 수 있도록 하기',
        '- 원하는 요리에 맞는 영상 제공하기',
        '- 내 위치 주변에 있는 마트 정보들 시각화 시켜주기'
    ]
    return (
        <>
            <S.MissionContainer>
                <S.Inner ref={ watchElement }>
                    <S.Image eventState={eventState} src='/img/about/aboutMission.png'/>
                    <S.Content>
                        <S.Title eventState={eventState}>M i s s i o n .</S.Title>
                        <S.Line eventState={eventState}/>
                        <S.Missions eventState={eventState}>    
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

export default MissionSection;