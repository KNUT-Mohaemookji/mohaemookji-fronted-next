import React, { useState, useEffect, PropsWithChildren } from 'react';
import VideoListView from '../../view/video/videoListView';
import { ICookingVideo } from '../../../types/interface';

const VideoList = (prop: PropsWithChildren) => {
    useEffect(() => {
        console.log('listProps', prop);
    }, []);
    // api에서 받아온 데이터들 cookingData에 넣어주기
    const cookingData: any = fetch('../api/cookingVideo')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            return res.data;
    })

    const [category, setCategory] = useState(['간식', '운동식', '건강식', '일반식']);
    
    const props = {
        cookingData,
        category
    }
    return (
        <>
            <VideoListView {...props} />
        </>
    );
};

export default VideoList;