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
    width: 400px;
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
    transition: .3s;
    @media screen and (max-width: 1200px){
        width: 50%;
        margin: auto;
        margin-top: 60%;
    }
`
export const ContentImage = styled.div`
    position: absolute;
    overflow: hidden;
    top: 0;
    width: 400px;
    height: 400px;
    transition: .5s;
    border-radius: 50%;
    @media screen and (max-width: 1200px){
        // width: 100%;
        // height: 300px;
        text-align: center;
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
`

export const Content = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    width: 80vw;
`

export const ContentItem = styled.div`
    position: relative;
    z-index: 10;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    transition: .5s;
    &:hover {
        display: flex;
        justify-content: center;
        margin: auto;
        width: 80%;
        margin: auto;
        height: 600px;
        border-radius: 20px;
        background-color: #E6E2C3;
        & > ${ContentImage} {
            margin: 50px 30px;
            width: 400px;
            height: 500px;
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
    }
    @media screen and (max-width: 900px){
        width: 100%;
        height: 800px;
        flex-direction: column;
    }
    // &:hover ~ .playListHover
`
// & > ${변수명} {}
