import { useEffect, useState } from 'react';
import { ILocalStorageSearch } from '../../types/interface';

const useSearch = () => {
    const [search, setSearch] = useState('');
    const [searchDatas, setSearchDatas] = useState(typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('search') as string) : null);
    let [afterChangeDatas, setAfterChangeDatas] = useState<ILocalStorageSearch>({
        search: [],
        expir: []
    });

    useEffect(() => {        
        if(searchDatas !== null) {
            if(searchDatas.search.length !== 0) {
                setAfterChangeDatas(searchDatas);
                expireSearchData();
            }else {
                localStorage.removeItem('search');
            }
        }
    }, [searchDatas]);

    // 검색 만료된 데이터들 생성
    const expireSearchData = () => {
        for(let i = 0; i < searchDatas.expir.length; i++) { 
            if(Date.now() > searchDatas.expir[i]) {
                deleteSearched(i);
            }
        }
    }

    const searched = (search: string) => {
        location.assign(`/recipe/${search}`);
        let expir = Date.now() + 86400000;
        // 검색 결과가 null 없거나, afterChangeDatas에 포함되지 않으면
        if(searchDatas === null || !afterChangeDatas.search.includes(search)) {
            afterChangeDatas.search.push(search);
            afterChangeDatas.expir.push(expir);
            localStorage.setItem('search', JSON.stringify(afterChangeDatas));
            setSearch('');
        } else {
            // 없으면 기존 데이터를 제일 앞으로 이동.
            let searchItemIndex = afterChangeDatas.search.indexOf(search);
            afterChangeDatas.search.splice(searchItemIndex, 1);
            afterChangeDatas.search.unshift(search)
            localStorage.setItem('search', JSON.stringify(afterChangeDatas));
            setSearch('');
        }
    }

    const deleteSearched = (index: number) => {
        const changedSearchData = searchDatas.search.filter((item: string, i: number) => item !== searchDatas.search[index]);
        const changedExpir = searchDatas.expir.filter((item: string, i: number) => item !== searchDatas.expir[index]);

        const searchObj = {
            search: changedSearchData,
            expir: changedExpir
        }
        
        setSearchDatas({
            search: changedSearchData,
            expir: changedExpir
        });

        localStorage.setItem('search', JSON.stringify(searchObj));
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