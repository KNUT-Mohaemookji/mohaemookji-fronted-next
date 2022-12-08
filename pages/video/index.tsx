import React, { useState, useEffect } from 'react';
import { PropsWithChildren } from 'react';
import VideoListView from '../../components/logic/video/videoList';
import VideoModal from '../../components/view/video/videoModalView';

const cookingData = fetch('../api/cookingVideo')
    .then(res => res.json())
    .then(res => {
        console.log(res);
        return res.data;
    })

const Video = () => {

    const modalProps = {
        cookingData
    }

    useEffect(() => {

    }, []);
    
    return (
        <>
            <div>
                <VideoListView />
                <VideoModal {...modalProps} />
            </div>
        </>
    );
};

export default Video;