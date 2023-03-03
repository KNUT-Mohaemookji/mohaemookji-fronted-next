import styled from 'styled-components';

export const ModalContent = styled.div`
    position: relative;
    text-align: center;
    overflow-y: scroll;
    width: 80vw;
    height: 80vh;
    margin-top: -5%;
    background-color: rgb(249, 249, 249);
    border: 0;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    @media (max-width: 900px) {
        width: 90vw;
        margin-top: -20%;
    }
`

export const ModalInner = styled.div`
    position: absolute;
    width: 50%;
    margin: auto;
    right: 0;
    left: 0;
    @media (max-width: 900px) {
        width: 75%;
    }
`

export const Close = styled.p`
    position: absolute;
    cursor: pointer;
    right: 0;
    font-size: 30px;
    font-weight: 700;
    @media (max-width: 900px) {
        font-size: 20px;
        font-weigh: 900;
    }
`

export const RecipeName = styled.p`
    font-size: 30px;
    font-weight: 700;
    color: #333;
    @media (max-width: 900px) {
        font-size: 20px;
    }
`

export const RecipeDetailsTitle = styled.div`
    font-size: 25px;
    font-weight: 700;
    color: #333;
    @media (max-width: 900px) {
        font-size: 18px;
    }
`

export const RecipeDetailsContent = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: grey;
    @media (max-width: 900px) {
        font-size: 12px;
    }
`

export const Menuals = styled.ul`
    display: flex;
    padding: 24px;
    overflow-x: scroll;
    // 스크롤 안되는 문제 해결
    transform: translateZ(0);
    scroll-snap-type: x mandatory;
    scroll-padding: 24px;
    gap: 10%;
`

export const Menual = styled.li`
    scroll-snap-align: start;
`

export const MenualImg = styled.div`
    // overflow: hidden;
    image-rendering: -webkit-optimize-contrast;
    backface-visibility: hidden;
    transform: translateZ(0);
    border-radius: 10px;
`

export const MenualContent = styled.p`
    font-size: 18px;
    font-weight: 600;
    color: #333;
    @media (max-width: 900px) {
        font-size: 16px;
        font-weight: 700;
    }
`

export const MartContain = styled.div`
    width: 100%;
`