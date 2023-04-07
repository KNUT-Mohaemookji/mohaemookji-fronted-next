import styled from 'styled-components';

interface IButtonStyle {
    marginLeft: string;
}

export const MainButtonContain = styled.div`
    position: relative;
    display: flex;
    @media (max-width: 900px){
        justify-content: space-around;
    }
`
export const Button = styled.button`
    position: relative;
    z-index: 10;
    width: 250px;
    height: 60px;
    font-size: 20px;
    font-weight: 700;
    color: #333;
    border-radius: 10px;
    background-color: #E6E2C3;
    border: 0;
    cursor: pointer;
    @media (max-width: 900px){
        width: 150px;
        height: 50px;
        font-size: 14px;
        left: 0px;
    }
`