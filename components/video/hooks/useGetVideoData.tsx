import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../../store/reducers/getVideo';
import { IVideoListViewProps, ICookingVideo } from '../types/interface';

export const useGetVideoData = ({ cookingData, categoryCookingData }: IVideoListViewProps) => {
    const router = useRouter();
    const {slug} = router.query;
    const dispatch = useDispatch();

    let [getData, setGetData] = useState<ICookingVideo[] | undefined>([]);
    let [clickVideoIndex, setClickVideoIndex] = useState(0);
    const [categorys, setCategorys] = useState<string[]>([]);
    
    // const [value] = useState(0);

    const videoClick = (index: number) => {
        console.log(index);
        dispatch(actions.video_modal());
        setClickVideoIndex(index);
    }

    useEffect(() => {
        console.log(cookingData);
        fetch('/api/category')
            .then(res => res.json())
            .then(data => setCategorys(data.item))
        // slug 기준으로 영상 랜덤으로 불러오기
        slug === 'all' ? setGetData(cookingData) : setGetData(categoryCookingData);        
    }, [categoryCookingData, cookingData, slug]);
    return {
        getData, clickVideoIndex,categorys, videoClick
    };
};
