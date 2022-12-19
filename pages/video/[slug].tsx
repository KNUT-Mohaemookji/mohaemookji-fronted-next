import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PropsWithChildren } from 'react';
import VideoListView from '../../components/logic/video/videoList';
// import VideoModal from '../../components/view/video/videoModalView';
import { RootState } from '../../store/reducers';
import { actions, SET_VIDEO_LIST } from '../../store/reducers/getVideo';

const Video = () => {
    return (
        <>
            <div>
                <VideoListView/>
            </div>
        </>
    );
};

export default Video;