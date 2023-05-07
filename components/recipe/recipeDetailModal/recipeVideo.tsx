import React, {useEffect, useState} from 'react';
import {ICookingVideo} from '../types/recipe/interface';
import {useRecipeVideoData} from '../hooks/useRecipeVideoData';
import * as S from '../style/recipeAndVideoModal';
import ReactPlayer from 'react-player';
import ErrorFallBack from '../../common/ErrorFallBack';


const RecipeVideo = () => {
    const [videoDataRes, setVideoDataRes] = useState([]);
    const [errorState, setErrorState] = useState(false);
    const youtubeVideoData = useRecipeVideoData();

    useEffect(() => {
        youtubeVideoData.then(res => {
            setVideoDataRes(res);
        }).catch(() => {
            setErrorState(true);
        }) 
    }, []);
    
    return (
        <>
            <S.RecommendationVideoTitle>추천 영상</S.RecommendationVideoTitle>
            <S.RecommendationVideoContain>
                {
                    errorState === true
                    ? <ErrorFallBack/>
                    : <S.RecommendationVideos>
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
                }
            </S.RecommendationVideoContain>
        </>
    );
};

export default RecipeVideo;