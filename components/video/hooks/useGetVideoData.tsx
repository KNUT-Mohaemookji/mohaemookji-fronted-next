import router, { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../store/reducers/getVideo';
import { IVideoListViewProps } from '../types/interface';

export const useGetVideoData = ({ cookingData, categoryCookingData }:IVideoListViewProps) => {
    const router = useRouter();
    const {slug} = router.query;
    const dispatch = useDispatch();

    let [getData, setGetData] = useState([]);
    let [clickVideoIndex, setClickVideoIndex] = useState(0);
    const [categorys, setCategorys] = useState<string[]>([]);
    
    const [value, setValue] = useState(0);

    const handleChange = (newValue: number) => {
        setValue(newValue);
    };

    const videoClick = (index: number) => {
        dispatch(actions.video_modal());
        setClickVideoIndex(index);
    }

    useEffect(() => {
        fetch('/api/category')
            .then(res => res.json())
            .then(data => setCategorys(data.item))
        // slug 기준으로 영상 랜덤으로 불러오기
        slug === 'all' ? setGetData(cookingData) : setGetData(categoryCookingData);        
        // console.log('categoryList', categoryList);
    }, [categoryCookingData, cookingData, slug]);
    return {
        handleChange,getData, clickVideoIndex,categorys, videoClick, value
    };
};
