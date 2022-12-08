/* eslint-disable react-hooks/exhaustive-deps */
import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import { actions, VIDEO_MODAL, GET_VIDEO_LIST, getVideoAPI } from '../../../store/reducers/getVideo';
import { ICookingVideo } from '../../../types/interface';
// import { getList } from '../../../store/reducers/getVideo';

const VideoModalView = (props: any) => {
    const state = useSelector((state: RootState) => state.getVideo)
    // const getStateData = useSelector((state: RootState) => state.getVideo.videoData);
    const dispatch = useDispatch();
    let [data, setData] = useState();
    let data2 = {};


    // const getData = (useCallback(() => {
    //     dispatch(actions.get_video_list());
    //     console.log(state);
                
    // }, [dispatch])());
    
    useEffect(() => {
        console.log(state);
        
        const getData = async () => {
            return new Promise(resolve => {
                // resolve(dispatch(actions.get_video_list()));
                resolve(getVideoAPI());
            }).then(res => {
                // console.log(res);
                console.log(state);
                setData({ ...state.videoData });
                data2 = { ...state.videoData };
                console.log(data2[0]._id);
                console.log(data);
            })
        }

        getData();
        
        // dispatch(actions.get_video_list());
        // console.log(state.videoData[0]);
        // // setTimeout(() => {
            
        //     data2 = state.videoData;
        //     console.log(data2);
        // // }, 1000);
        
    }, []);

    return (
        <>
            <div>
                {
                    <p>ㅁㄴ{{ ...data2[0]._id } }</p>
                    // state.videoData.map((video: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => {
                    //     return (
                    //         <p key={index}>{video}</p>
                    //     )
                    // })
                }
            </div>
            {
                state.modalState === false ?
                <div className="modal_contain">
                    <div className="inner">
                        <p className="close" onClick={() => { dispatch(actions.video_modal()) }}>X</p>
                            <video className="video" src="https://www.youtube.com/watch?v=xsI1lO7r9_A" />          
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