import React, { useState, useEffect } from 'react';
import { ICookingVideo } from '../../../types/interface';
import VideoModalView from '../../view/video/videoModalView';

const VideoModal = ({cookingData, clickVideoIndex}) => {
    let [modalData, setModalData] = useState({});

    // let getData = () => {
    //     cookingData.then(res => {
    //         modalData = {...res[clickVideoIndex]};
    //         console.log(modalData);
            
    //         return res;
    //     })
    // }
    // useEffect(() => {
    //     getData();
    // }, []);

    return (
        <div>
            <VideoModalView {...modalData}/>
        </div>
    );
};

export default VideoModal;