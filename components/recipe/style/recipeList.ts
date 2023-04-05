import styled from 'styled-components';

export const RecipeListContain = styled.div`
    position: relaative;
    width: 100vw;
    min-height: 75vh;
`

export const RecipeListInner = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 3% auto;
    flex-wrap: wrap;
    gap: 50px;
    width: 70vw;
`

export const MoreButton = styled.button`
    width: 300px;
    height: 50px;
    color: #fff;
    background-color: #A6BB8D;
    border: 0;
    border-radius: 10px;
    margin: auto;
    font-size: 18px;
    font-weight: 700;
`

export const RecipeModal = styled.div`
    position: fixed;
    z-index: 10;
`

export const BackgroundBlack = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 120vw;
    height: 120vh;
    background: rgba(0, 0, 0, .7);
`