import React, { useState } from 'react';

const useSearch = () => {
    const [search, setSearch] = useState('');
    const [searchDatas, setSearchDatas] = useState<string[]>([]);
    const searched = () => {
        sessionStorage.setItem('search', JSON.stringify(searchDatas));
        console.log(sessionStorage.getItem('search'));
        
    }
    return {search, setSearch, searched, searchDatas, setSearchDatas}
};

export default useSearch;