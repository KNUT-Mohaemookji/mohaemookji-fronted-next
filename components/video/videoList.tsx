import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import router, { useRouter } from 'next/router';
import { IVideoListViewProps } from './types/interface';
import { useDispatch, useSelector } from 'react-redux';
import { actions, VIDEO_MODAL } from '../../store/reducers/getVideo';
import { RootState } from '../../store/reducers';
import VideoModal from './videoModal';

// material-ui
import { createTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useGetVideoData } from './hooks/useGetVideoData';

const VideoListView = ({ cookingData, categoryCookingData, category }: IVideoListViewProps) => {
    const state = useSelector((state: RootState) => state);
    const { handleChange, getData, clickVideoIndex, categorys, videoClick, value } = useGetVideoData({ cookingData, categoryCookingData });
    const router = useRouter();

    // material UI
    const categoryTheme = createTheme({
        palette: {
          primary: {
            main: '#333'
          },
        },
      });

    const modalProps = {
        getData,
        clickVideoIndex
    };

    return (
        <>
            <div className="contain">
                {
                    state.getVideo.modalState === false ?
                    <VideoModal {...modalProps}/>
                    : null
                }
                <ul className="category">
                <Box>
                    <Tabs
                        onChange={handleChange}
                        value={value}
                        aria-label="Tabs where selection follows focus"
                        selectionFollowsFocus
                            sx={{
                                '& .MuiTabs-indicator': { backgroundColor: "#333" },
                                '& .Mui-selected': { color: "#333" },
                                '& .MuiTab-root': { color: "#333" },
                        }}
                    >
                        {
                            categorys.map((item, index) => {
                                return (
                                    <Tab
                                    theme={categoryTheme}
                                        key={index} label={item} 
                                        onClick={() => {router.push(`/video/${item}`)}}
                                    />
                                )
                            })
                        }
                    </Tabs>
                </Box>
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
                    .category{
                        display: flex;
                        flex-wrap: wrap;
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

export default VideoListView;