import React, { createContext } from 'react';
import YoutubeVideos from './youtubeVideos';
import VideoCategory from './videoCategory';
import { IVideoListViewProps } from './types/interface';

export const VideoListContext = createContext<IVideoListViewProps>({
    cookingData: [],
    categoryCookingData: []
});

const VideoListView = ({ cookingData, categoryCookingData, category }: IVideoListViewProps) => {
    return (
        <>
            <div className="contain">
                <VideoListContext.Provider value={{ cookingData, categoryCookingData, category }}>
                    <VideoCategory />
                    <YoutubeVideos/>
                </VideoListContext.Provider>
            </div>
                        
            <style jsx>{`
                .contain{
                    position: relative;
                    margin: auto;
                    width: 90%;
                }
            `}</style>
        </>
    );
};

export default VideoListView;