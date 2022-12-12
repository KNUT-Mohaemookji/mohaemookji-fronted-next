/* eslint-disable react-hooks/exhaustive-deps */
import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import { actions, VIDEO_MODAL, GET_VIDEO_LIST, getVideoAPI } from '../../../store/reducers/getVideo';
import { ICookingVideo } from '../../../types/interface';

const VideoModalView = ({getData, clickVideoIndex}) => {
    const state = useSelector((state: RootState) => state.getVideo);
    const dispatch = useDispatch();
    let [modalData, setModalData] = useState({});
    let [loading, setLoading] = useState(true);

    function click(){
        console.log(state);
    }
    
    useEffect(() => {
        setModalData(getData[clickVideoIndex]);
    }, [getData, modalData]);

    return (
        <>
            <div className="modal_contain">
                <div className="inner">
                    <p className="close" onClick={() => { dispatch(actions.video_modal()) }}>X</p>
                    
                    <p className="videoName">{modalData.title}</p>
                    
                </div>
            </div>
            <style jsx>{`
                .modal_contain{
                    position: fixed;
                    z-index: 100;
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