import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PropsWithChildren } from 'react';
import VideoListView from '../../components/logic/video/videoList';
import VideoModal from '../../components/view/video/videoModalView';
import { RootState } from '../../store/reducers';
import { actions, SET_VIDEO_LIST } from '../../store/reducers/getVideo';

const cookingData = fetch('../api/cookingVideo')
    .then(res => res.json())
    .then(res => {
        return res;
    })

const Video = () => {
    const state = useSelector((state: RootState) => state.getVideo);
    const dispatch = useDispatch();
    
    const modalProps = {
        cookingData
    }

    useEffect(() => {
        dispatch({
            type: SET_VIDEO_LIST,
            setVideoData: cookingData
        })
        console.log(state);
        
        // dispatch(actions.set_video_list({setVideoData: cookingData}))
    }, []);
    
    return (
        <>
            <div>
                <VideoListView />
                {/* <VideoModal {...modalProps} /> */}
            </div>
        </>
    );
};

export default Video;