import styled from 'styled-components';

export const NotRecipeContain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`

export const NotRecipeList = styled.h1`
    color: #BBD6B8;
    font-size: 40px;
    text-align: center;
    margin-top: 10%;
    @media (max-width: 900px) {
        font-size: 25px;
        margin-top: 20%;
    }
`