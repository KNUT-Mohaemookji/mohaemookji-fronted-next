import React, { useRef, useState } from 'react';
import { member, role, userImage } from '../../utils/about/constants';
import useScrollEvent from '../common/hooks/useScrollEvent';
import * as S from './style/contactSection';

const CotactSection = () => {
    const contact = useRef<HTMLDivElement>(null);
    const [eventState, setEventState] = useState(false);

    useScrollEvent(contact, setEventState);
    
    return (
        <>
            <S.ContactContainer ref={contact}>
                <S.Title>C O N T A C T .</S.Title>
                <S.Line />
                <S.Members>
                    {
                        member.map((member, index) => {
                            return (
                                <S.Member key={index} eventState={eventState}>
                                    <S.UserImage width='250px' src={userImage[index]}/>
                                    <S.Role>{role[index]}</S.Role>
                                    <S.Name>{member.name}</S.Name>
                                    <S.Email>{member.email}</S.Email>
                                </S.Member>
                            )
                        })
                    }
                </S.Members>
            </S.ContactContainer>
        </>
    );
};

export default CotactSection;