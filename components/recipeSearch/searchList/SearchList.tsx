import * as S from '../style/searchList';
import { ISearchListProps } from '../types/interface';
import {useEffect, useState} from 'react';

const SearchList = ({searchDatas, deleteSearched}: ISearchListProps) => {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, [searchDatas]);
    
    return (
        <S.SearchListContain>
            <S.SearchItems>
                {
                    domLoaded && searchDatas !== null
                    ? searchDatas.map((item: string, index: number) => (
                            <S.SearchItem key={index}>
                                <S.SearchItemClose onClick={() => {deleteSearched(index)}}>X</S.SearchItemClose>
                                {/* location.assign 써도 되나..? */}
                                <S.SearchText onClick={() => location.assign(`/recipe/${item}`)}>{ item }</S.SearchText>
                                
                            </S.SearchItem>
                        ))
                    : <S.NotItemTitle>최근에 검색한 내용이 없습니다.</S.NotItemTitle>
                }
            </S.SearchItems>
        </S.SearchListContain>
    );
};

export default SearchList;