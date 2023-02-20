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
    margin-top: -10px;
    left: -40px;
`

export const SubLine = styled.hr`
    width: 500px;
    height: 1px;
    background-color: #f8f9fa;
`

export const Notice = styled.li`
    margin-top: 20px;
    font-size: 20px;
    font-weight: 600;
    color: #333;
`

export const NoticeExplanation = styled.p`
    color: #868e96;
    font-weight: 600;
`