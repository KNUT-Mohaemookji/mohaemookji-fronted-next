import React, { useState, useEffect } from 'react';
import { ICookingVideo } from '../../../types/interface';
import VideoModalView from '../../view/video/videoModalView';

const VideoModal = () => {
    let [data, setData] = useState([]);
    const cookingData = fetch('../api/cooking')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            return res.data;
        })
    
    const props = {
        cookingData,
    }

    return (
        <div>
            <VideoModalView { ...props} />
        </div>
    );
};

export default VideoModal;