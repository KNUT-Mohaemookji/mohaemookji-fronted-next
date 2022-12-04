import React, { PropsWithChildren, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import { actions, VIDEO_MODAL } from '../../../store/reducers/getVideo';

const VideoModalView = (props: PropsWithChildren) => {
    const state = useSelector((state: RootState) => state)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('state', state);
        console.log('dispatch', dispatch(actions.video_modal()));
        
        console.log(props);
    }, []);
    return (
        <>
            {
                state.getVideo.modalState === false ?
                <div className="modal_contain">
                    <div className="inner">
                        <p className="close" onClick={() => {dispatch(actions.video_modal())}}>X</p>
                        <video className="video" src="https://www.youtube.com/watch?v=xsI1lO7r9_A"/>
                    </div>
                </div>
                : null
            }
            <style jsx>{`
                .modal_contain{
                    position: fixed;
                    top: 0;  
                    left: 0;
                    width: 100vw;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    .inner{
                        position: absolute;
                        margin: 8% auto;
                        left: 0;
                        right: 0;
                        background-color: #fff;
                        border-radius: 20px;
                        width: 50%;
                        height: 70%;
                        .close {
                            position: absolute;
                            cursor: pointer;
                            right: 20px;
                            font-size: 30px;
                            font-weight: 700;
                            color: #333;
                        }
                        .video {
                            width: 100px;
                            height: 100px;
                        }
                    }
                }
            `}</style>
        </>
    );
};

export default VideoModalView;