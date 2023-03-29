import styled from 'styled-components';

export const MainSectionContain = styled.div`
    position: relative;
    width: 100vw;
    height: 85vh;
    display: flex;
    justify-content: space-around;
    margin-top: 5%;
    @media (max-width: 900px){
        flex-direction: column;
        overflow: hidden;
        height: 120vh;
    }
    @media (max-width: 500px){
        height: 200vh;
    }
`
export const MainLeft = styled.div`
    line-height: 1.5;
    @media (max-width: 900px){
        margin: auto;
        text-align: center;
    }
`

export const MainRight = styled.div`
    height: 95vh;
    overflow: hidden;
    margin-top: -5%;
    @media (max-width: 900px){
        margin: auto;
        text-align: center;
    }
`