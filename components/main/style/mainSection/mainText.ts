import styled from 'styled-components';

export const MainTextContain = styled.div`
    position: relative;
    left: -40px;
    margin: auto;
    width: 500px;
    height: 200px;
    overflow: hidden;
    font-family: 'Lato', sans-serif;
    font-size: 35px;
    line-height: 40px;
    color: #333;
    @media (max-width: 900px) {
        left: 0px;
    }
`

export const MainTextContent = styled.div`
    display: flex;
    font-weight: 600;
    overflow: hidden;
    height: 49px;
    padding: 0 40px;
    @media (max-width: 900px){
        justify-content: center;
    }
`

export const ContentText = styled.p`
    display: inline;
    font-size: 50px;
    margin-top: 7px;   
    float: left;
    @media (max-width: 900px){
        font-size: 40px;
    }
`

export const ContainerLists = styled.ul`
    margin-top: 0;
    text-align: left;
    list-style: none;   
`

export const ContainerList = styled.li`
    margin-left: 10px;
    font-size: 50px;
    line-height: 1;
    width: 130px;
    text-align: center;
    @media (max-width: 900px){
        font-size: 50px;
    }
`

export const Text = styled.p`
    position: absolute;
    top: 30px;
    left: 40px;
    font-size: 50px;
    font-weight: 700;
    margin-top: 50px;
    @media (max-width: 900px){
        left: 0;
        right: 0;
        font-size: 40px;
    }
`

export const SubText = styled.p`
    font-size: 20px;
    color: #868e96;
    font-weight: 600;
    margin: 23% 8%;
`