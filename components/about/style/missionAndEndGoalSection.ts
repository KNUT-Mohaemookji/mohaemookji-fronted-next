import styled from 'styled-components';
import {LeftToRight, RightToLeft} from '../../../styles/animation';

export const Image = styled.img<{eventState: boolean}>`
    width: 30%;
    border-radius: 20px;
    animation: ${(props) => props.eventState === true && LeftToRight};
    animation-duration: 1s;
    @media (max-width: 900px) {
        width: 80%;
    }
`

export const Content = styled.div`
    line-height: 2.5;
`

export const Title = styled.h1<{eventState: boolean}>`
    font-size: 60px;
    color: #333;
    animation: ${(props) => props.eventState === true && RightToLeft};
    animation-duration: 1s;
    @media (max-width: 900px) {
        font-size: 30px;
    }
`

export const Line = styled.hr<{eventState: boolean}>`
    position: absolute;
    margin-top: -1.5%;
    height: 1.5px;
    width: 5%;
    background-color: #539165;
    animation: ${(props) => props.eventState === true && RightToLeft};
    animation-duration: 3s;
`

export const Missions = styled.ul<{eventState: boolean}>`
    line-height: 2;
    animation: ${(props) => props.eventState === true && RightToLeft};
    animation-duration: 1s;
`

export const Mission = styled.li`
    font-size: 20px;
    font-weight: 600;
    transition: 1s;
    @media (max-width: 900px) {
        font-size: 16px;
    }
`


export const MissionContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #eeeeee;
`

export const EndGoalContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`

export const Background = styled.div`
    // position: absolute;
    // width: 150vw;
    // height: 100%;
    // background-color: #e3e3e3;
    // transform: skew(3deg,-3deg)
`

export const Inner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 900px) {
        flex-direction: column;
    }
`