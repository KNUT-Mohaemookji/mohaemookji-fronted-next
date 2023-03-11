import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import * as S from '../style/searchBar';
import { ISearchBarProps } from '../types/interface';

const SearchBar = ({search, setSearch, searched}: ISearchBarProps) => {

    const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            searched(search);
            // router.push(`/recipe/${search}`);
        }
    }

    return (
        <S.SearchBar>
            <S.SearchInput 
            onKeyPress={handleOnKeyPress}
            onChange={(e) => setSearch(e.target.value)} type="text" placeholder='검색어를 입력해주세요.' value={search} />
            <S.SearchButton onClick={() => searched(search)}>
                {/* <Link href={`/recipe/${search}`}> */}
                    검색
                {/* </Link> */}
            </S.SearchButton>
        </S.SearchBar>
    );
};

export default SearchBar;