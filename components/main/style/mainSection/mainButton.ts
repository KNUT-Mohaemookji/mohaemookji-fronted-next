import styled from 'styled-components';

interface IButtonStyle {
    marginLeft: string;
}

export const MainButtonContain = styled.div`
    position: relative;
    display: flex;
`
export const Button = styled.button`
    position: relative;
    z-index: 10;
    width: 120px;
    height: 60px;
    font-size: 20px;
    font-weight: 700;
    color: #333;
    border-radius: 10px;
    background-color: #E6E2C3;
    border: 0;
    cursor: pointer;
    margin-top: 10%;
    margin-left: ${(props: IButtonStyle) => props.marginLeft}
`

export const CategoryList = styled.div`

`