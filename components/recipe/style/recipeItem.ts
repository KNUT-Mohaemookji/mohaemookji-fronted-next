import styled from 'styled-components';

export const ListContent = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ECE8DD;
    object-fit: cover;
    transition: .3s;
    transform: translateY(190px);
    @media screen and (max-width: 900px) {
        transform: translateY(150px);
    }
`

export const RecipeList = styled.div`
    position: relative;
    width: 30%;
    height: 250px;
    border-radius: 20px;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    cursor: pointer;
    &:hover {
        ${ListContent} {
            transform: translateY(0);
        }
    }
    @media (max-width: 900px) {
        width: 95%;
        height: 200px;
    }
`

export const BlackImage = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    border-radius: 20px;
`

export const ContentInner = styled.div`
    width: 100%;
    height: 100%;
    padding: 0px 20px;
`

export const FoodName = styled.div`
    font-size: 20px;
    color: #333;
    font-weight: 700;
    margin-top: 20px;
    @media screen and (max-width: 900px) {
        font-size: 14px;
    }
`

export const HashTag = styled.p`
    font-size: 20px;
    font-weight: 700;
    color: #AD8E70;
    @media screen and (max-width: 900px) {
        font-size: 14px;
    }
`

export const Ingredient = styled.p`
    height: 40px;
    font-size: 16px;
    font-weight: 600;
    color: #333;
    padding-right: 30px;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    @media screen and (max-width: 900px) {
        font-size: 12px;
    }
`

export const CookingImgs = styled.ul`
    margin-left: -60px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
    @media screen and (max-width: 900px) {
        // width: 30%;
    }
`

export const CookingImg = styled.span`
    border-radius: 10px;
`
