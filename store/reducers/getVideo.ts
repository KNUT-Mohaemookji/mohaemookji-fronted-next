import { ICookingVideo } from '../../types/interface';
import {
    createAction,
    ActionType,
    createReducer
} from 'typesafe-actions';
import axios from 'axios';

interface IVideoValue {
    modalState: boolean,
    videoData: any,
    setVideoData: any
}

const initialState: IVideoValue = {
    modalState: true,
    videoData: {},
    setVideoData: {},
};

export const VIDEO_MODAL = 'getVideo/VIDEO_MODAL';
export const SET_VIDEO_LIST = 'getVideo/SET_VIDEO_LIST';
export const GET_VIDEO_LIST = 'getVideo/GET_VIDEO_LIST';

export const video_modal = createAction(VIDEO_MODAL)();
export const set_video_list = createAction(SET_VIDEO_LIST)<IVideoValue>();
export const get_video_list = createAction(GET_VIDEO_LIST)();

export async function getVideoAPI() {
    const resData = await fetch('http://127.0.0.1:16261/cooking-video')
        .then(res => res.json())
        .then(res => {
            initialState.videoData = { ...res };
            console.log(res)
            return [...res]
        })
}

export const actions = { video_modal, set_video_list, get_video_list};

type GetVideoActions = ActionType<typeof actions>;

const getVideo = createReducer<IVideoValue, GetVideoActions>(initialState, {
    [VIDEO_MODAL]: (state) => {
        return ({
            ...state,
            modalState: !state.modalState,
        })
    },
    [GET_VIDEO_LIST]: (state, action) => {
        
        // let getData = getVideoAPI()
        // console.log(getData);
        // getData.then(res => {
        //     console.log(res);
        // })
        return ({
            ...state,
            videoData

        })
    },
    [SET_VIDEO_LIST]: (state, action) => {
        console.log('SET_VIDEO_LIST', action);
        const promise = action.setVideoData.then(res => res)
        .then(res => {
            console.log(res);
            
            return res
        });
        let setData;
        console.log(promise);
        
        
        return ({
            ...state,
            videoData: setData
        })
    }
});

export default getVideo;