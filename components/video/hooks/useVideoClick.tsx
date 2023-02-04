import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../../store/reducers/getVideo';

export const useVideoClick = () => {
    const dispatch = useDispatch();
    const [clickVideoIndex, setClickVideoIndex] = useState(0);
    const videoClick = (index: number) => {
        dispatch(actions.video_modal());
        setClickVideoIndex(index)
    }

    return { clickVideoIndex, videoClick };
};