import React, { useEffect, useState } from 'react';

type SearchList = string[];

const SearchList = () => {
    // const searchList = sessionStorage.getItem('search') as unknown as string[];
    const searchList = typeof window !== 'undefined' ? sessionStorage.getItem('search') : null;
    // const [searchList, setSearchList] = useState([]) as unknown as string[];
    useEffect(() => {
        console.log(searchList);
        
        // setSearchList(sessionStorage.getItem('search'));
    }, [searchList]);
    return (
        <div>
            <ul>
                {
                    searchList
                        ? JSON.parse(searchList).map((item: string, index: number) => (
                            <li key={index}>{ item }</li>
                        ))
                        :
                        <h2>최근에 검색한 내용이 없습니다.</h2>
                }
            </ul>
        </div>
    );
};

export default SearchList;