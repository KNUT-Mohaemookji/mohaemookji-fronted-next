import styled, {keyframes} from 'styled-components';


const Bounce = keyframes`
    0%{
        transform: translateY(0px);
    }
    50%{
        transform: translateY(-10px);
    }
    100%{
        transform: translateY(0px);
    }
`

export const Title = styled.h1`
    position: absolute;
    font-size: 25px;
    text-align: center;
    margin-top: 150px;
    color: #fff;
    z-index: 10;
`

export const ExplanationButton = styled.button`
    position: absolute;
    right: 0;
    bottom: 40px;
    z-index: 10;
    opacity: 0;
    width: 60px;
    height: 60px;
    font-size: 30px;
    font-weight: 700;
    color: #fff;
    background-color: #7eaf5a;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
        opacity: 1;
        animation: 1s infinite alternate ${Bounce};
    }
`

export const Explanation = styled.p`
    opacity: 0;
    font-size: 20px;
    font-weight: 600;
    color: grey;
`

export const Text = styled.div`
    position: absolute;
    width: 400px;
    @media screen and (max-width: 1200px){
        width: 100%;
        margin: auto;
    }
`
export const ContentImage = styled.div`
    position: absolute;
    overflow: hidden;
    top: 0;
    width: 100%;
    transition: .5s;
    border-radius: 50%;
    @media screen and (max-width: 1200px){
        text-align: center;
    }
    @media screen and (max-width: 500px){
        border-radius: 20px;
    }
`
export const BackBlackColor = styled.div`
    position: absolute;
    opacity: 1;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    z-index: 10;
    background: rgba(0, 0, 0, .5);
    @media (max-width: 900px){
        width: 100%;
    }
    @media screen and (max-width: 500px){
        border-radius: 20px;
    }
`

export const Content = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    width: 80vw;
    @media (max-width: 1200px) {
        width: 100%;
    }
`

export const ContentItem = styled.div`
    position: relative;
    z-index: 10;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    // transition: .5s;
    @media (max-width: 500px) {
        width: 350px;
        height: 350px;
        border-radius: 0;
    }
    &:hover {
        display: flex;
        justify-content: center;
        margin: auto;
        width: 80%;
        margin: auto;
        height: 600px;
        border-radius: 20px;
        background-color: #E6E2C3;
        transition: .5s;
        & > ${ContentImage} {
            margin: 50px 30px;
            width: 100%;
            transition: .5s;
            border-radius: 10px;
            display: block;
            left: 0;
        }
        & > ${BackBlackColor} {
            opacity: 0;
            width: 80vw;
            height: 400px;
        }
    
        & > ${Text} {
            position: relative;
            margin-top: 5%;
            margin-left: 50%;   
            & > ${Title}{
                position: relative;
                text-align: left;
                font-size: 40px;
                margin-top: 0;
                color: #333;
            }
            & > ${ExplanationButton} {
                opacity: 1;
                animation: 1s infinite alternate ${Bounce};
            }
        }
        @media (max-width: 1200px) {
            width: 100%;
            & > ${ContentImage} {
                margin: 30% auto;
            }
            & > ${Text} {
                width: 100%;
                left: 0;
                top: 0;
                bottom: 0;
                margin: 5% auto;
                & > ${Title} {
                    font-size: 30px;
                    text-align: center;
                    margin: 8% auto;
                    width: 80%;
                }
                & > ${ExplanationButton} {
                    width: 50px;
                    height: 50px;
                    font-size: 20px;
                    margin: -5% 20px;
                }
            }
        }
        @media (max-width: 500px) {
            & > ${ContentImage} {
                margin: 50% auto;
            }
        }
    }
`
// & > ${변수명} {}
