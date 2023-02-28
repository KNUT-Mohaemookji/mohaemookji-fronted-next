export interface ISearchBarProps {
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    search: string;
    searched: (search: string) => void;
}

export interface ISearchListProps {
    searchDatas: string[];
    deleteSearched: (index: number) => void;
}
