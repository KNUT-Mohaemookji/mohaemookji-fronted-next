import styled from 'styled-components';
import {LeftToRight, RightToLeft} from '../../../styles/animation';

export const ContactContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10%;
    width: 100vw;
    height: 100vh;   
    color: #333;
    background-color: #eeeeee;
    text-align: center;
    @media (max-width: 500px) {
        gap: 3%;
    }
`

export const UserImage = styled.img`
    border: 3px solid #e3e3e3;
    border-radius: 50%;
    @media (max-width: 900px){
        width: 150px;
    }
`

export const Title = styled.h1`
    font-size: 50px;
    @media (max-width: 900px){
        font-size: 25px;
    }
`

export const Line = styled.hr`
    width: 5%;
    margin-top: -4%;
    height: 1.5px;
    background-color: #539165;
    @media (max-width: 900px) {
        display: none;
    }
`

export const Members = styled.ul`
    width: 50%;
    display: flex;
    justify-content: space-around;
    @media (max-width: 900px){
        flex-direction: column;
        gap: 50px;
    }
`

export const Member = styled.li<{eventState: boolean}>`
    text-align: center;
    line-height: 2;
    &:nth-child(1){
        animation: ${props => props.eventState && LeftToRight};
        animation-duration: 1s;
    }
    &:nth-child(2){
        animation: ${props => props.eventState && RightToLeft};
        animation-duration: 1s;
    }
`;

export const Role = styled.h3`
    font-size: 35px;
    font-weight: 700;
    @media (max-width: 900px){
        font-size: 20px;
    }
`

export const Name = styled.p`
    font-weight: 600;
    font-size: 25px;
    @media (max-width: 900px){
        font-size: 18px;
    }
`

export const Email = styled.p`
    font-weight: 600;
    font-size: 25px;
    @media (max-width: 900px){
        font-size: 16px;
    }
`