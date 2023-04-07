import styled from 'styled-components';
import { BottomToTop, RightToLeft } from '../../../../../styles/animation';

export const RecipeSectionTextContain = styled.div`
    position: relative;
    width: 100vw;
    heght: 100vh;
`

export const Content = styled.div`
    position: absolute;
    display: flex;
    text-align: left;
    flex-direction: column;
    margin-top: -20%;
    gap: 30px;
    right: 10%;
    width: 50%;
    color: #333;
    @media (max-width: 900px){
        width: 80%;
        text-align: center;
        margin-top: 25%;
        align-items: center;
        height: 0%;
    }
`

export const Title = styled.h1<{eventState: boolean}>`
    font-size: 50px;
    font-weight: 700;
    animation: ${props => props.eventState && RightToLeft};
    animation-duration: 1s;
    @media (max-width:900px) {
        animation: ${props => props.eventState && BottomToTop};
        animation-duration: 1s;
        font-size: 25px;
    }
`

export const SubTitle = styled.p<{eventState: boolean}>`
    animation: ${props => props.eventState && RightToLeft};
    animation-duration: 2s;
    font-size: 20px;
    font-weight: 600;
    color: #A3BB98;   
    @media (max-width:900px) {
        animation: ${props => props.eventState && BottomToTop};
        animation-duration: 2s;
        font-size: 12px;
    }
`