import React, { useEffect, useState } from 'react';
import * as S from '../style/searchBar';
import useSearch from './hooks/useSearch';
import {useRouter} from 'next/router';
import { ISearchBarProps } from '../types/interface';

const SearchBar = ({search, setSearch, searched}: ISearchBarProps) => {
    const router = useRouter();
    return (
        <S.SearchBar>
            <S.SearchInput onChange={(e) => setSearch(e.target.value)} type="text" placeholder='검색어를 입력해주세요.' value={search} />
            <S.SearchButton onClick={() => searched(search)}>검색</S.SearchButton>
        </S.SearchBar>
    );
};

export default SearchBar;