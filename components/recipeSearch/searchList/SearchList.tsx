import * as S from '../style/searchList';
import { ISearchListProps } from '../types/interface';
import { useRouter } from 'next/router';

const SearchList = ({searchDatas, deleteSearched}: ISearchListProps) => {
    const router = useRouter();
    return (
        <S.SearchListContain>
            <S.SearchItems>
                {
                    searchDatas.length !== 0
                        ? searchDatas.map((item: string, index: number) => (
                            <S.SearchItem key={index}>
                                <S.SearchItemClose onClick={() => {deleteSearched(index)}}>X</S.SearchItemClose>
                                <p onClick={() => router.push(`/recipe/${item}`)}>{ item }</p>
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