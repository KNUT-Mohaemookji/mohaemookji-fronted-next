import styled from 'styled-components';

export const RecipeItemContain = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 70vh;
    @media (max-width: 900px){
        height: 80vh;
    }
`
export const RecipeList = styled.div`
    position: relative;
    display: flex;
    width: 80%;
    height: 50vh;
    border-radius: 70px 150px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
    @media (max-width: 900px) {
        flex-direction: column;
        border-radius: 20px;
        width: 100%;
        height: 80vh;
    }
    @media (max-width: 500px) {
        height: 80vh;
    }
`

export const RecipeMainImage = styled.img`
    width: 50%;
    border-radius: 70px 150px;
    @media (max-width: 900px) {
        border-radius: 20px;
        width: 100%;
        aspect-ratio: 5/4;
    }
`
export const RecipeContentContainer = styled.div`
    width: 50%;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 15px;
    @media (max-width: 900px) {
        justify-content: space-around;
        width: 100%;
        padding: 0;
    }
`
export const RecipeTitle = styled.h2`
    font-size: 30px;
    text-align: center;
    color: #333;
    @media (max-width: 900px) {
        font-size: 20px;
    }
`

export const HashTag = styled.p`
    font-size: 20px;
    font-weight: 700;
    color: #AD8E70;
    text-align: center;
    @media (max-width: 900px) {
        font-size: 14px;
        margin-top: -5px;
    }
`

export const IngredientTitle = styled.h3`
    text-align: center;
    @media (max-width: 900px) {
        font-size: 16px;
        margin-top: 2px;
    }
`

export const Ingredient = styled.p`
    width: 80%;
    height: 35px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: #808080;
    margin-top: -5px;
    padding-right: 30px;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    @media screen and (max-width: 900px) {
        font-size: 12px;
        height: 30px;
    }
`

export const DetailButton = styled.button`
    width: 60%;
    height: 50px;
    border-radius: 10px;
    border: 0;
    font-size: 16px;
    font-weight: 700;
    background-color: #E6E2C3;
    color: #333;
    cursor: pointer;
    margin-top: 30px;
    @media (max-width: 900px) {
        width: 80%;
        font-size: 14px;
        margin-top: 10px;
    }
`