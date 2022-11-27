import React, { useEffect } from 'react';
import { ICookingVideo } from '../../../types/interface';

interface Props {
    cookingData: ICookingVideo
}

const VideoListView = ({ cookingData }: any) => {
    useEffect(() => {
        console.log(cookingData)
    })
    return (
        <div>
            {/* ??
            {cookingData[0] && cookingData[0].map((data: Props, index: number) => {
                return (
                    
                )
            })} */}
        </div>
    );
};

export default VideoListView;