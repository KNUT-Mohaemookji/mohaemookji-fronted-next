/* eslint-disable react-hooks/exhaustive-deps */
import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import { actions, VIDEO_MODAL } from '../../../store/reducers/getVideo';
import { ICookingVideo } from '../../../types/interface';
import ReactPlayer from 'react-player';
// import PlayerIcon from 'react-player-controls';
import { FiX } from 'react-icons/fi';


const VideoModalView = ({getData, clickVideoIndex}: any) => {
    const state = useSelector((state: RootState) => state.getVideo);
    const dispatch = useDispatch();
    let [modalData, setModalData] = useState<any>({});
    let [loading, setLoading] = useState(true);

    function click(){
        console.log(state);
    }
    
    useEffect(() => {
        setModalData(getData[clickVideoIndex]);
        console.log(getData);
    }, [getData, modalData]);

    return (
        <>
            <div className="modal_contain">
                <div className="inner">
                    <p className="close" onClick={() => { dispatch(actions.video_modal()) }}><FiX/></p>
                    
                    <p className="videoName">{modalData.title}</p>
                    <div className="player">
                        <ReactPlayer  
                            url={modalData.url} 
                            width="100%"
                            playing={true}
                            controls={true}
                        />

                    </div>
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
                            top: -15px;
                            right: 20px;
                            font-size: 40px;
                            color: #333;
                        }
                        .videoName{
                            margin: 20px auto;
                            text-align: center;
                            width: 50%;
                            font-size: 20px;
                            font-weight: 700;
                        }
                        .player {
                            width: 80%;
                            aspect-radio: 16/9;
                            position: absolute;
                            left: 0;
                            right: 0;
                            margin: auto;
                            border-radius: 10px;
                        }
                    }
                    @media (max-width: 768px){
                        .inner{
                            width: 80%;
                        }
                    }
                }
            `}</style>
        </>
    );
};

export default VideoModalView;