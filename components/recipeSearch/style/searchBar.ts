import styled from 'styled-components';

export const SearchBar = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    width: 40vw;
    margin: auto;
    @media (max-width: 900px){
        width: 85%;
    }
`
export const SearchInput = styled.input`
    width: 90%;
    height: 70px;
    padding: 10px;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 700;
    border-radius: 10px;
    @media (max-width: 900px){
        height: 50px;
        font-size: 16px;
    }
`

export const SearchButton = styled.button`
    width: 8%;
    height: 70px;
    font-size: 18px;
    font-weight: 700;
    border-radius: 10px;
    border: 0;
    background: lightgrey;
    color: #fff;
    cursor: pointer;
    @media (max-width: 900px){
        font-size: 16px;
        width: 20%;
        height: 50px;
        margin-left: 10px;
    }
`