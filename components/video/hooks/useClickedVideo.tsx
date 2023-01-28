import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../../store/reducers/getVideo';

const useClickedVideo = (index: number): number => {
    const dispatch = useDispatch();
    const [clickVideoIndex, setClickVideoIndex] = useState(0);
    dispatch(actions.video_modal());
    setClickVideoIndex(index);
    console.log('ㄷㄷ');
    
    return clickVideoIndex;
};

export default useClickedVideo;