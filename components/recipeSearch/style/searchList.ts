import styled from 'styled-components';

export const SearchListContain = styled.div`
    position: relative;
    margin-top: 30px;
    width: 100vw;
    height: 40vh;
`

export const SearchItems = styled.ul`
    position: absolute;
    padding: 20px;
    left: 0;
    right: 0;
    margin: auto;
    width: 40%;
    box-sizing: border-box;
    border: 3px solid lightgrey;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    @media (max-width: 900px){
        width: 85%;
    }
`

export const SearchItemClose = styled.p`
    position: absolute;
    display: none;
    right: -5px;
    top: -15px;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid #333;
    font-weight: 700;
    font-size: 8px;
    padding: 3px;
    background-color: #fff;
    color: #333;
`

export const SearchItem = styled.li`
    position: relative;
    z-index: 1;
    padding: 20px;
    max-height: 50px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #EDF1D6;
    font-weight: 600;
    color: #333;
    cursor: pointer;
    display: flex;
    align-items: center;
    &:hover {
        // 자식요소 선택하는 방법!
        > ${SearchItemClose} {
            display: block;
        }
    }
    @media (max-width: 900px){
        font-size: 14px;
        margin: auto;
    }
`

export const SearchText = styled.p`
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const NotItemTitle = styled.h3`
    width: 100%;
    color: #333;
    text-align: center;
    @media (max-width: 900px){
        font-size: 14px;
        margin: auto;
    }
`