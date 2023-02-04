import React, { useContext } from 'react';
import { useGetVideoData } from './hooks/useGetVideoData';
import { VideoListContext } from './videoList';

// material-ui
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';


const VideoCategory = () => {
    const router = useRouter();
    const { cookingData } = useContext(VideoListContext);
    const { categorys } = useGetVideoData({ cookingData });
    return (
        <>
            <ul className="category">
                <Box>
                    <Tabs
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
                                        key={index} label={item} 
                                        onClick={() => {router.push(`/video/${item}`)}}
                                    />
                                )
                            })
                        }
                    </Tabs>
                </Box>
            </ul>   
        </>
    );
};

export default VideoCategory;