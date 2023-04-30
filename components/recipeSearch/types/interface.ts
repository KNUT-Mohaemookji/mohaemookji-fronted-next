export interface ISearchBarProps {
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    search: string,
    searched: (search: string) => void
}

export interface ISearchListProps {
    searchDatas: ILocalStorageSearch,
    // searchDatas: string[],
    deleteSearched: (index: number) => void;
}

export interface ILocalStorageSearch {
    search: string[],
    expires: number[]
}
