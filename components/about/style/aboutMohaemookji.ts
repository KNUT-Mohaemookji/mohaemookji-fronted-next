import styled from 'styled-components';
import {LeftToRight} from '../../../styles/animation';

export const MohaemookjiContainer = styled.div`
    position: relative;
    margin-top: -4.5%;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`

export const VideoContain = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`

export const VideoBackground = styled.video`
    position: absolute;
    min-width : 100%;
	min-height : 100%;
    width : auto;
	height : auto;
    background-size: cover; /*contain 사용하면 최대한으로 늘리는것이기에 여백이 생길 수 있음*/
    background-position: center; /*반응형으로 해주기위한 장치!*/;
`

export const DarkBackground = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 105%;
    background: rgba(0, 0, 0, 0.7);
`

export const Content = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 5%;
    margin-left: 10%;
    @media screen and (max-width: 900px){
        align-items: center;
    }
`

export const Title = styled.h1`
    color: #eeeeee;
    font-size: 100px;
    animation: ${LeftToRight} 1s;
    @media (max-width: 900px) {
        font-size: 50px;
    }
`

export const Line = styled.hr`
    position: absolute;
    margin-top: 3%;
    height: 1px;
    width: 30%;
    background-color: #fff;
    color: #fff;
    animation: ${LeftToRight} 1.3s;
`

export const SubTitle = styled.p`
    width: 25%;
    font-size: 25px;
    line-height: 1.4;
    color: #fff;
    font-weight: 300;
    margin-top: -5px;
    animation: ${LeftToRight} 1.5s;
    @media screen and (max-width: 900px){
        width: 80%;
        font-size: 20px;
    }
`
export const Thick = styled.span`
    font-weight: 700;
`