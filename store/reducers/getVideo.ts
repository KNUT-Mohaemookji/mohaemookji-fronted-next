import {
    createAction,
    ActionType,
    createReducer
} from 'typesafe-actions';

interface IVideoValue {
    modalState: boolean
}

const initialState: IVideoValue = {
    modalState: false
};

export const VIDEO_MODAL = 'getVideo/VIDEO_MODAL';

export const video_modal = createAction(VIDEO_MODAL)();

export const actions = { video_modal };

type GetVideoActions = ActionType<typeof actions>;

const getVideo = createReducer<IVideoValue, GetVideoActions>(initialState, {
    [VIDEO_MODAL]: (state) => {
        return ({
            modalState: !state.modalState
        })
    }
});

export default getVideo;