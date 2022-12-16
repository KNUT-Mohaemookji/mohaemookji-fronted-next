import { ICookingVideo } from '../../types/interface';
import {
    createAction,
    ActionType,
    createReducer
} from 'typesafe-actions';
import axios from 'axios';

interface IVideoValue {
    category: any;
    modalState: boolean,
    videoData: any,
    setVideoData: any
}

const initialState: IVideoValue = {
    modalState: true,
    videoData: {},
    setVideoData: {},
    category: ['간식', '운동식', '건강식', '일반식']
};

export const VIDEO_MODAL = 'getVideo/VIDEO_MODAL';

export const video_modal = createAction(VIDEO_MODAL)();

export const actions = { video_modal };

type GetVideoActions = ActionType<typeof actions>;

const getVideo = createReducer<IVideoValue, GetVideoActions>(initialState, {
    [VIDEO_MODAL]: (state) => {
        return ({
            ...state,
            modalState: !state.modalState,
        })
    },
});

export default getVideo;