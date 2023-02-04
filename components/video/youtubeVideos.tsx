import React, { useContext } from 'react';
import { useGetVideoData } from './hooks/useGetVideoData';
import { VideoListContext } from './videoList';
import { IVideoListViewProps } from './types/interface';
import VideoModal from './videoModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { useVideoClick } from './hooks/useVideoClick';
import { useDispatch } from 'react-redux';
const YoutubeVideos = () => {
    const state = useSelector((state: RootState) => state);
    const { cookingData, categoryCookingData } = useContext<IVideoListViewProps>(VideoListContext);
    const { getData } = useGetVideoData({ cookingData, categoryCookingData });
    const { clickVideoIndex, videoClick } = useVideoClick();

    const modalProps = {
        getData,
        clickVideoIndex
    };
    
    return (
        <>
            {
                state.getVideo.modalState === false ?
                <VideoModal {...modalProps}/>
                : null
            }
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
            <style jsx>{`
            .items {
                position: relative;
                margin: auto;
                width: 90%;
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                .item_container {
                    position: relative;
                    cursor: pointer;
                    aspect-radio: 16/9;
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
                @media (max-width: 768px){
                    .item_container {
                        width: 100%;
                    }
                }
            }
            `}</style>
        </>
    );
};

export default YoutubeVideos;