import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ICookingVideo } from '../../../types/interface';
import { useDispatch, useSelector } from 'react-redux';
import { actions, VIDEO_MODAL } from '../../../store/reducers/getVideo';
import { RootState } from '../../../store/reducers';
import VideoModal from '../../view/video/videoModalView.tsx';

interface Props {
    cookingData: ICookingVideo
}

const cookingData = fetch('../api/cookingVideo')
    .then(res => res.json())
    .then(res => {
        return res;
    })

const VideoListView = ({ cookingData }: Props) => {
    const state = useSelector((state: RootState) => state);
    const dispatch = useDispatch();
    let [getData, setGetData] = useState([]);
    let [clickVideoIndex, setClickVideoIndex] = useState(0);


    const props = {
        getData,
        clickVideoIndex
    };

    const videoClick = (index) => {
        dispatch(actions.video_modal());
        setClickVideoIndex(index);
    }

    useEffect(() => {
        console.log(cookingData);
        cookingData.then(res => {
            setGetData(res);
        })
        console.log(getData);
    }, [cookingData, getData]);
    return (
        <>
            {
                state.getVideo.modalState === false ?
                <VideoModal {...props}/>
                : null
            }
            <ul className="items">
            {
                getData && getData.map((data, index) => {
                    return (
                        <>
                            <div className="item_container"
                            onClick={() => {videoClick(index)}}>
                                <picture className="item_image">
                                    {/* <img key={ index } src={data.thumbnail} /> */}
                                    <div style={{ backgroundImage: `url(${data.thumbnail})` }} className="item_image" />
                                </picture>
                                <div className="item_content">
                                    <p className="item_title">{data.title}</p>
                                    <p className="item_keyword">{data.keyword}</p>
                                </div>
                            </div>
                        </>
                    )
                })
            }
            </ul>
            <style jsx>{`
                .items{ 
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                .item_container {
                    position: relative;
                    cursor: pointer;
                    width: 300px;
                    box-shadow: 4px 12px 30px 6px rgb(231, 231, 231);
                    border-radius: 20px;
                    padding: 20px;
                    margin: 20px;
                    .item_image {
                        border-radius: 20px;
                        margin-right: 30px;
                        width: 100%;
                        height: 200px;
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                    .item_content .item_title{
                        font-weight: 600;
                    }
                    .item_content .item_keyword{
                        color: grey;
                        font-weight: 600;
                    }
                }
            `}</style>
        </>
    );
};

export default VideoListView;