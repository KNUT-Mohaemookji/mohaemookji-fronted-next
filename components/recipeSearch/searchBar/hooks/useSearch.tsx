import React, { useEffect, useState } from 'react';

const useSearch = () => {
    const [search, setSearch] = useState('');
    const [searchDatas, setSearchDatas] = useState<string[]>([]);

    const searched = (search: string) => {
        if(!searchDatas.includes(search)) {
            sessionStorage.setItem('currentSearch', search);
            setSearchDatas([...searchDatas, search]);
            sessionStorage.setItem('search', JSON.stringify(searchDatas));
            setSearch('');
        }else {
            // setSearchDatas(searchDatas.filter((item, i) => item !== searchDatas[index]))
            // setSearchDatas(searchDatas.splice(0, 1, search));
            setSearch('');
        }
    }

    const deleteSearched = (index: number) => {
        setSearchDatas(searchDatas.filter((item, i) => item !== searchDatas[index]))
        sessionStorage.setItem('search', JSON.stringify(searchDatas));
    }

    return {
        deleteSearched,
        search, 
        setSearch, 
        searched,
        searchDatas, 
        setSearchDatas
    }
};

export default useSearch;