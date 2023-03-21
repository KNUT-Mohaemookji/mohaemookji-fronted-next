import styled from 'styled-components';

export const RecipeList = styled.div`
    position: relative;
    display: flex;
    width: 80%;
    height: 50vh;
    border-radius: 20px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
    @media (max-width: 900px) {
        flex-direction: column;
        width: 100%;
        height: 80vh;
    }
`

export const RecipeMainImage = styled.img`
    width: 50%;
    border-radius: 20px;
    @media (max-width: 900px) {
        width: 100%;
    }
`
export const RecipeContentContainer = styled.div`
    padding: 20px;
    width: 50%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 900px) {
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

// export const ListContent = styled.div`
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     background-color: #ECE8DD;
//     object-fit: cover;
//     transition: .3s;
//     transform: translateY(190px);
//     @media screen and (max-width: 900px) {
//         transform: translateY(150px);
//     }
// `

// export const RecipeList = styled.div`
//     position: relative;
//     width: 30%;
//     height: 250px;
//     border-radius: 20px;
//     background-repeat: no-repeat;
//     background-size: cover;
//     overflow: hidden;
//     cursor: pointer;
//     &:hover {
//         ${ListContent} {
//             transform: translateY(0);
//         }
//     }
//     @media (max-width: 900px) {
//         width: 95%;
//         height: 200px;
//     }
// `

// export const BlackImage = styled.div`
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, .5);
//     border-radius: 20px;
// `

// export const ContentInner = styled.div`
//     width: 100%;
//     height: 100%;
//     padding: 0px 20px;
// `

// export const FoodName = styled.div`
//     font-size: 20px;
//     color: #333;
//     font-weight: 700;
//     margin-top: 20px;
//     @media screen and (max-width: 900px) {
//         font-size: 14px;
//     }
// `

// export const HashTag = styled.p`
//     font-size: 20px;
//     font-weight: 700;
//     color: #AD8E70;
//     @media screen and (max-width: 900px) {
//         font-size: 14px;
//     }
// `

// export const Ingredient = styled.p`
//     height: 40px;
//     font-size: 16px;
//     font-weight: 600;
//     color: #333;
//     padding-right: 30px;
//     white-space: normal;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     display: -webkit-box;
//     -webkit-line-clamp: 2;
//     -webkit-box-orient: vertical;
//     @media screen and (max-width: 900px) {
//         font-size: 12px;
//     }
// `

// export const CookingImgs = styled.ul`
//     margin-left: -60px;
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     gap: 10px;
//     @media screen and (max-width: 900px) {
//         // width: 30%;
//     }
// `

// export const CookingImg = styled.span`
//     border-radius: 10px;
// `
