import React, { useState, useEffect } from 'react';
import VideoListView from '../../components/logic/video/videoList';
// import { ICookingVideo } from '../../types/interface';

const Video = () => {
    // api에서 받아온 데이터들 cookingData에 넣어주기
    // const cookingData: ICookingVideo = fetch('../api/cookingVideo')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         return data;
    // })
    useEffect(() => {

    }, []);
    
    // const props = {
    //     cookingData
    // }
    return (
        <>
            <VideoListView/>
        </>
    );
};

export default Video;