import * as S from '../style/searchList';
import { ISearchListProps } from '../types/interface';
import { useRouter } from 'next/router';
import {useEffect, useState} from 'react';

const SearchList = ({searchDatas, deleteSearched}: ISearchListProps) => {
    const router = useRouter();
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        console.log(searchDatas.length);
        
      setDomLoaded(true);
    }, []);
    
    return (
        <S.SearchListContain>
            <S.SearchItems>
                {
                    domLoaded &&
                    searchDatas.length !== 0
                    ? searchDatas.map((item: string, index: number) => (
                            <S.SearchItem key={index}>
                                <S.SearchItemClose onClick={() => {deleteSearched(index)}}>X</S.SearchItemClose>
                                
                                <S.SearchText onClick={() => router.push(`/recipe/${item}`)}>{ item }</S.SearchText>
                                
                            </S.SearchItem>
                        ))
                        :
                        <S.NotItemTitle>최근에 검색한 내용이 없습니다.</S.NotItemTitle>
                }
            </S.SearchItems>
        </S.SearchListContain>
    );
};

export default SearchList;