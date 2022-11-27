import React, { useEffect } from 'react';
import VideoListView from '../../view/video/videoListView';
import { ICookingVideo } from '../../../types/interface';

const VideoList = () => {
    // api에서 받아온 데이터들 cookingData에 넣어주기
    const cookingData: any = fetch('../api/cookingVideo')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return data;
    })
    useEffect(() => {
        console.log('??');
        
        console.log(cookingData);
    }, []);
    
    const props = {
        cookingData
    }
    return (
        <>
            <VideoListView {...props} />
        </>
    );
};

export default VideoList;