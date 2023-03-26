import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IVideoListViewProps, ICookingVideo } from '../types/interface';

export const useGetVideoData = ({ cookingData, categoryCookingData }: IVideoListViewProps) => {
    const router = useRouter();
    const { slug } = router.query;
    
    let [getData, setGetData] = useState<ICookingVideo[] | undefined>([]);
    const [categorys, setCategorys] = useState<string[]>([]);

    useEffect(() => {
        console.log(cookingData);
        fetch('http://127.0.0.1:16261/video-data')
            .then(res => res.json())
            .then(data => setCategorys(data.item))
        // slug 기준으로 영상 랜덤으로 불러오기
        slug === 'all' ? setGetData(cookingData) : setGetData(categoryCookingData);        
    }, [categoryCookingData, cookingData, slug]);
    return {
        getData ,categorys
    };
};
