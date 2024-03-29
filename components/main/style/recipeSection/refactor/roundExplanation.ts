import styled, {keyframes} from 'styled-components';
import { BottomToTop, LeftToRight } from '../../../../../styles/animation';

export const RoundExplanationContain = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    bottom: 0;
    left: 0;
    overflow: hidden;
    @media (max-width: 900px){
        order: 2;
    }
`

export const RoundExplanationInner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    right: 0;
    margin: auto;
    @media (max-width: 900px){
        display: flex;
        right: 0;
        margin: auto;
    }
`

export const RecipeContainImage = styled.div<{eventState: boolean}>`
    animation: ${props => props.eventState && LeftToRight};
    animation-duration: 1s;
    display: flex;
    position: absolute;
    width: 70%;
    height: 40%;
    object-fit: cover;
    z-index: 10;
    bottom: 30%;
    left: 20%;
    @media (max-width:900px){
        animation: ${props => props.eventState && BottomToTop};
        animation-duration: 1s;
        width: 80%;
        height: 30%;
        margin: auto;
        left: 0;
        right: 0;
        bottom: 10%;
    }
`

export const RoundModel = styled.div`
    position: absolute;
    bottom: -40%;
    left: -15%;
    width: 100%;
    height: 90%;
    border-radius: 50%;
    background-color: #F7E1AE;
    @media (max-width: 900px){
        left: 0;
        right: 0;
        border-radius: 40%;
        bottom: -25%;
        width: 100%;
        height: 50%;
    }
`