import React, {useEffect, useRef, useState} from 'react';
import { missions } from '../../utils/about/constants';
import useScrollEvent from '../common/hooks/useScrollEvent';
import * as S from './style/missionAndEndGoalSection';

const MissionSection = () => {
    const watchElement = useRef<HTMLDivElement>(null);
    const [eventState, setEventState] = useState(false);
    
    useScrollEvent(watchElement, setEventState);

    return (
        <>
            <S.MissionContainer>
                <S.Background/>
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