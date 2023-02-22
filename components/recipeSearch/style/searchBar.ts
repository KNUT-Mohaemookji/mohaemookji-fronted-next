import styled from 'styled-components';

export const SearchBar = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    width: 40vw;
    margin: auto;
`
export const SearchInput = styled.input`
    width: 90%;
    height: 70px;
    padding: 10px;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 700;
    border-radius: 10px;
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
`