import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ICookingVideo } from '../../../types/interface';
import { useDispatch, useSelector } from 'react-redux';
import { actions, VIDEO_MODAL } from '../../../store/reducers/getVideo';
import { RootState } from '../../../store/reducers';
import { useRouter } from 'next/router';
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
    const router = useRouter();
    const { slug } = router.query;

    let [getData, setGetData] = useState([]);
    let [clickVideoIndex, setClickVideoIndex] = useState(0);

    const modalProps = {
        getData,
        clickVideoIndex
    };

    const videoClick = (index) => {
        dispatch(actions.video_modal());
        setClickVideoIndex(index);
    }

    useEffect(() => {
        // slug 기준으로 영상 랜덤으로 불러오기
        console.log('route', slug);
        
        cookingData.then(res => {
            setGetData(res);
        })
        console.log(getData);
    }, [cookingData, getData]);
    
    return (
        <>
            <div className="contain">
                {
                    state.getVideo.modalState === false ?
                    <VideoModal {...modalProps}/>
                    : null
                }
                <ul className="category">
                {
                    state.getVideo.category.map((item, index) => {
                        return (
                            <li className="categoryItem" key={index}>{item}</li>
                        )
                    })
                }
                </ul>
                <div className="videos">
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
                </div>
            </div>
                        
            <style jsx>{`
            .contain{
                position: relative;
                margin: auto;
                width: 90%;
            }
                .category{
                    display: flex;
                    .categoryItem{
                        list-style: none;
                        margin-left: 30px;
                        font-size: 20px;
                        font-weight: 600;
                        color: #333;
                        cursor: pointer;
                    }
                }
                .items{ 
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                .item_container {
                    position: relative;
                    cursor: pointer;
                    width: 25%;
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