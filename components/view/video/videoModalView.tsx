import React, { PropsWithChildren, useEffect } from 'react';
// extends PropsWithChildren

const VideoModalView = (props: PropsWithChildren) => {
    useEffect(() => {
        console.log(props);
    }, []);
    return (
        <>
            {
                props.modalState &&
            <div className="modal_contain">
                <div className="inner">
                    <p className="close" onClick={props.modalStateFunc}>X</p>
                    <video className="video" src="https://www.youtube.com/watch?v=xsI1lO7r9_A"/>
                </div>
            </div>
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