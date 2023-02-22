import React from 'react';
import SearchBar from './searchBar/SearchBar';
import SearchList from './searchList/SearchList';

const RecipeSearchMain = () => {
    return (
        <div>
            <SearchBar />
            <SearchList/>
        </div>
    );
};

export default RecipeSearchMain;