import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useSearch = () => {
    const [search, setSearch] = useState('');
    const searchDatas = typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem('search')) : null;
    const router = useRouter();
    let [afterChangeDatas, setAfterChangeDatas] = useState<string[]>([]);

    useEffect(() => {
        setAfterChangeDatas([]);
    }, []);

    const searched = (search: string) => {
        if(searchDatas === null || !searchDatas.includes(search)) {
            afterChangeDatas.push(search);
            // sessionStorage.setItem('currentSearch', search);
            sessionStorage.setItem('search', JSON.stringify(afterChangeDatas));
            setSearch('');
            // router.push(`/recipe/${search}` , undefined, { shallow: true });
        } else {
            let searchItemIndex = afterChangeDatas.indexOf(search);
            const fromItem = afterChangeDatas.splice(searchItemIndex, 1);
            setAfterChangeDatas([...fromItem, ...afterChangeDatas]);
            sessionStorage.setItem('search', JSON.stringify(afterChangeDatas));
            setSearch('');
            // router.push(`/recipe/${search}`);
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