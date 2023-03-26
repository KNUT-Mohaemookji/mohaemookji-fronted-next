import styled from 'styled-components';

export const MohaemookjiContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 90vh;
`

export const VideoContain = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`

export const VideoBackground = styled.video`
    position: absolute;
    width: 100%;
    height: 100%;
`

export const DarkBackground = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
`

export const Content = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    // left: 10%;
`

export const Title = styled.h1`
    color: #eeeeee;
    font-size: 100px;
`

export const Line = styled.hr`
    position: absolute;
    margin-top: 6%;
    height: 1px;
    width: 30%;
    background-color: #fff;
    color: #fff;
`

export const SubTitle = styled.p`
    width: 30%;
    font-size: 25px;
    line-height: 1.4;
    color: #fff;
    font-weight: 300;
    margin-top: -5px;
`
export const Thick = styled.span`
    font-weight: 700;
`