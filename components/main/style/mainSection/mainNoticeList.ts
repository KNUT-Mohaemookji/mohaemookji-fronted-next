import styled, { keyframes } from 'styled-components';

const MainNoticeAnimation = keyframes`
    from {
        margin-left: -20%;
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const Notices = styled.ul`
    animation: ${MainNoticeAnimation} 1s;
    position: absolute;
    left: -20px;
    @media (max-width: 900px) {
        left: 0;
        right: 0;
    }
`

export const SubLine = styled.hr`
    width: 500px;
    height: 1px;
    margin-top: 10px;
    background-color: #f8f9fa;
    @media (max-width: 900px) {
        height: 0px;
        width: 80%;
        margin: 5% auto;
    }
`

export const Notice = styled.li`
    margin-top: 30px;
    font-size: 20px;
    font-weight: 600;
    color: #333;
    @media(max-width: 900px) {
        font-size: 16px;
    }
`

export const NoticeExplanation = styled.p`
    color: #868e96;
    font-weight: 600;
    margin-top: 20px;
`