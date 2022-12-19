import React, { useState, useEffect, PropsWithChildren } from 'react';
import VideoListView from '../../view/video/videoListView';
import { ICookingVideo } from '../../../types/interface';

const VideoList = (prop: PropsWithChildren) => {
    useEffect(() => {
        console.log('listProps', prop);
    }, []);
    // api에서 받아온 데이터들 cookingData에 넣어주기
    const cookingChannelFilterData: any = fetch('../api/cookingVideo')
    .then(res => res.json())
    .then(res => {
        console.log(res);
        return res.data;
    })

    const cookingData: any = fetch('../api/cookingVideo')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            return res.data;
    })
    
    const props = {
        cookingData,
        cookingChannelFilterData
    }
    return (
        <>
            <VideoListView {...props} />
        </>
    );
};

export default VideoList;