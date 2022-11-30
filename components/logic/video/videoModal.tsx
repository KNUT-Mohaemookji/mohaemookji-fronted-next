import React, { useState, useEffect } from 'react';
import { ICookingVideo } from '../../../types/interface';

const VideoModal = () => {
    let [data, setData] = useState([]);
    const cookingData: any = fetch('../api/cooking')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            return res.data;
        })
    const props = {
        cookingData
    }
    // useEffect(() => {

    // }, []);
    return (
        <div>
            
        </div>
    );
};

export default VideoModal;