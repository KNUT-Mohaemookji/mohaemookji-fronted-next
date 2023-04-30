import React from 'react';
import useSearch from './searchBar/hooks/useSearch';
import SearchBar from './searchBar/SearchBar';
import SearchList from './searchList/SearchList';
import useExpireSearch from './searchBar/hooks/useExpireSearch';

const RecipeSearchMain = () => {
    const {deleteSearched, search ,setSearch, searched, searchDatas} = useSearch();
    return (
        <div 
            style={{ height: "83vh" }}
        >
            <SearchBar setSearch={setSearch} searched={searched} search={search}/>
            <SearchList deleteSearched={deleteSearched} searchDatas={searchDatas}/>
        </div>
    );
};
export default RecipeSearchMain;