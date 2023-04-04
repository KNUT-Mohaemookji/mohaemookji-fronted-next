import React from 'react';
import useSearch from './searchBar/hooks/useSearch';
import SearchBar from './searchBar/SearchBar';
import SearchList from './searchList/SearchList';

const RecipeSearchMain = () => {
    const {deleteSearched, search ,setSearch, searched, searchDatas} = useSearch();
    return (
        <div 
            style={{ height: "78vh" }}
        >
            <SearchBar setSearch={setSearch} searched={searched} search={search}/>
            <SearchList deleteSearched={deleteSearched} searchDatas={searchDatas}/>
        </div>
    );
};

export default RecipeSearchMain;