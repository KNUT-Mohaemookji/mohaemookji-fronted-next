import { useEffect, useState } from 'react';

const useSearch = () => {
    const [search, setSearch] = useState('');
    const searchDatas = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('search') as string) : null;
    let [afterChangeDatas, setAfterChangeDatas] = useState<string[]>([]);

    useEffect(() => {
        if(searchDatas !== null) {
            setAfterChangeDatas(searchDatas);
        }
    }, []);

    const searched = (search: string) => {
        // 검색 결과가 null 없거나, afterChangeDatas에 포함되지 않으면
        if(searchDatas === null || !afterChangeDatas.includes(search)) {
            afterChangeDatas.push(search);
            localStorage.setItem('search', JSON.stringify(afterChangeDatas));
            setSearch('');
        } else {
            // 없으면 기존 데이터를 제일 앞으로 이동.
            let searchItemIndex = afterChangeDatas.indexOf(search);
            afterChangeDatas.splice(searchItemIndex, 1);
            afterChangeDatas.unshift(search)
            localStorage.setItem('search', JSON.stringify(afterChangeDatas));
            setSearch('');
        }
    }

    const deleteSearched = (index: number) => {
        const changedSearchData = searchDatas.filter((item: string, i: number) => item !== searchDatas[index]);
        // 나중에 수정하기 (재렌더링 문제 임시로 해결)
        setAfterChangeDatas([...afterChangeDatas, changedSearchData]);
        localStorage.setItem('search', JSON.stringify(changedSearchData));
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