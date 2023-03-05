import React, { useEffect, useState } from 'react';

const useSearch = () => {
    const [search, setSearch] = useState('');
    const searchDatas = typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem('search')) : null;
    let [afterChangeDatas, setAfterChangeDatas] = useState<string[]>([]);

    useEffect(() => {
        
    }, []);
    const searched = (search: string) => {
        if(!searchDatas.includes(search)) {
            sessionStorage.setItem('currentSearch', search);
            searchDatas.push(search);
            sessionStorage.setItem('search', JSON.stringify(searchDatas));
            setSearch('');
        }else {
            let searchItemIndex = searchDatas.indexOf(search);
            const fromItem = searchDatas.splice(searchItemIndex, 1);
            const changedSearchData = fromItem.concat(...searchDatas)
            setAfterChangeDatas([...afterChangeDatas, fromItem]);
            sessionStorage.setItem('search', JSON.stringify(changedSearchData));
            setSearch('');
        }
    }

    const deleteSearched = (index: number) => {
        const changedSearchData = searchDatas.filter((item: string, i: number) => item !== searchDatas[index]);
        // 나중에 수정하기 (재렌더링 문제 임시로 해결결)
        setAfterChangeDatas([...afterChangeDatas, changedSearchData]);
        sessionStorage.setItem('search', JSON.stringify(changedSearchData));
    }

    return {
        deleteSearched,
        search, 
        setSearch, 
        searched,
        searchDatas, 
    }
};

export default useSearch;