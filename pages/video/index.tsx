import React, { useState, useEffect } from 'react';
import { PropsWithChildren } from 'react';
import VideoListView from '../../components/logic/video/videoList';
import VideoModal from '../../components/view/video/videoModalView';
// import { ICookingVideo } from '../../types/interface';

interface IModalProps extends PropsWithChildren{
    modalState: boolean;
    // 함수 타입정의
    modalStateFunc(): void;
}

const Video = () => {
    const [modalState, setModalState] = useState(false);
    const modalStateFunc = () => {
        console.log('!');
        setModalState(!modalState);
    }

    const modalProps: IModalProps = {
        modalState,
        modalStateFunc
    }

    useEffect(() => {
        console.log(modalState);
    }, [modalState]);
    
    return (
        <>
            <div>
                <VideoListView {...modalProps} />
                <VideoModal {...modalProps} />
            </div>
        </>
    );
};

export default Video;