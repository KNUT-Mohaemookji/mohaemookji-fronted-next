import styled, {keyframes} from 'styled-components';

const BackImageAnimation = keyframes`
    from {
        transform: scale(1.3);
    }
    to {
        transform: scale(0);
    }
`

export const LastSectionContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 85vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    // transition: .3s;
`

export const DarkBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
`

export const LastSectionContent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // animation: ${BackImageAnimation} 2s;

`
export const TitleText = styled.h1`
    color: #fff;
    font-size: 50px;    
`

export const SubTitle = styled.p`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    line-height: 1.7rem;
    color: grey;
`

export const LastSectionButton = styled.button`
    width: 180px;
    height: 60px;
    background-color: #E6E2C3;
    border-radius: 16px;
    font-size: 20px;
    font-weight: 600;
    border: 0;
    transition: .3s;
    cursor: pointer;
    &:hover {
        background-color: transparent;
        border: 3px solid #fff;
        color: #fff;
    }
`