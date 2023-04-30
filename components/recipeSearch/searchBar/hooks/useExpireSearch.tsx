import useSearch from './useSearch';

const useExpireSearch = (data: { search: string[], expir: number[] }) => {
    const {deleteSearched} = useSearch();
    if(data){
        for(let i = 0; i < data.expir.length; i++) { 
            if(Date.now() > data.expir[i]) {
                deleteSearched(i);
            }
        }
    }
}

export default useExpireSearch;