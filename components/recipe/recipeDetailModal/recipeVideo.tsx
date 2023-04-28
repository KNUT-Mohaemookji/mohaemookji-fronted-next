import React, {useEffect, useState} from 'react';
import {ICookingVideo} from '../types/recipe/interface';
import {useRecipeVideoData} from '../hooks/useRecipeVideoData';
import * as S from '../style/recipeModal';
import ReactPlayer from 'react-player';

const RecipeVideo = () => {
    const [videoDataRes, setVideoDataRes] = useState([]);
    const youtubeVideoData = useRecipeVideoData();

    useEffect(() => {
        youtubeVideoData.then(res => {
            setVideoDataRes(res);
        })
    }, []);
    
    return (
        <>
            <S.RecommendationVideoTitle>추천 영상</S.RecommendationVideoTitle>
            <S.RecommendationVideoContain>
                <S.RecommendationVideos>
                {
                    videoDataRes.map((video: ICookingVideo, index: number) => {
                        return (
                            // 임시로 1개
                            // index === 1 &&
                            <S.RecommendationVideo key={index}>
                                <S.VideoName>{video.title}</S.VideoName>
                                <ReactPlayer  
                                    videoId={video.videoId}
                                    url={video.url} 
                                    host={video.url} 
                                    width="100%"
                                    controls={true}
                                />
                            </S.RecommendationVideo>
                        )
                    })
                } 
                </S.RecommendationVideos>
            </S.RecommendationVideoContain>
        </>
    );
};

export default RecipeVideo;