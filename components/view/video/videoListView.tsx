import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ICookingVideo } from '../../../types/interface';
import { useDispatch, useSelector } from 'react-redux';
import { actions, VIDEO_MODAL } from '../../../store/reducers/getVideo';
import { RootState } from '../../../store/reducers';
import VideoModal from '../../view/video/videoModalView';

// material-ui
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, orange } from '@mui/material/colors';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


interface Props {
    cookingData: ICookingVideo
}

const VideoListView = ({ cookingData, categoryCookingData, category }: Props) => {
    // material UI
    const categoryTheme = createTheme({
        palette: {
          primary: {
            main: green[500],
          },
        },
      });

    const router = useRouter();
    const state = useSelector((state: RootState) => state);
    const dispatch = useDispatch();

    let [getData, setGetData] = useState([]);
    let [clickVideoIndex, setClickVideoIndex] = useState(0);

    const modalProps = {
        getData,
        clickVideoIndex
    };

    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const videoClick = (index) => {
        dispatch(actions.video_modal());
        setClickVideoIndex(index);
    }

    useEffect(() => {
        // slug 기준으로 영상 랜덤으로 불러오기
        category === 'all' ? setGetData(cookingData) : setGetData(categoryCookingData);        
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
                <Box>
                    <Tabs
                        onChange={handleChange}
                        value={value}
                        aria-label="Tabs where selection follows focus"
                        selectionFollowsFocus
                        sx={{
                            '& .MuiTabs-indicator': { backgroundColor: green[500] },
                            '& .Mui-selected': { color: green[500] },
                            // '& .MuiTab-root': { color: green[700] },
                        }}
                    >
                        <Tab label='all' 
                        sx={{
                            color: '#333',
                        }}
                        onClick={() => {router.push(`/video/all`)}}/>
                        {
                            state.getVideo.category.map((item, index) => {
                                return (
                                    <Tab
                                    theme={categoryTheme}
                                        sx={{
                                            color: '#333',
                                        }}
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