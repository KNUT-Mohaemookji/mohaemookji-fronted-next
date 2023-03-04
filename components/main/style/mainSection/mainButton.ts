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
    width: 50%;
    left: -40px;
    height: 60px;
    font-size: 20px;
    font-weight: 700;
    color: #333;
    border-radius: 10px;
    background-color: #E6E2C3;
    border: 0;
    cursor: pointer;
    margin-top: 10%;
    margin-left: ${(props: IButtonStyle) => props.marginLeft};
    @media (max-width: 900px){
        width: 50%;
        height: 50px;
        font-size: 14px;
        left: 0px;
    }
`