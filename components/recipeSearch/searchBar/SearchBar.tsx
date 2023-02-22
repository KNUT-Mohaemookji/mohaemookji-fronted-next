import React from 'react';
import * as S from '../style/searchBar';
import useSearch from './hooks/useSearch';
const SearchBar = () => {
    const { search, searchDatas, setSearch, searched, setSearchDatas } = useSearch();
    const searchHandler = () => {
        setSearchDatas([...searchDatas, search])
        searched();
    }
    return (
        <S.SearchBar>
            <S.SearchInput onChange={(e) => setSearch(e.target.value)} type="text" placeholder='검색어를 입력해주세요.' />
            <S.SearchButton onClick={() => searchHandler()}>검색</S.SearchButton>
        </S.SearchBar>
    );
};

export default SearchBar;