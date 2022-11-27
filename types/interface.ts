import React, {ReactNode} from 'react';
export interface ChildrenProps {
    children?: ReactNode | undefined
}

// cooking-video object type
export interface ICookingVideo {
    channelId: string,
    keyword: number,
    theme: string,
    thumbnail: string,
    title: string,
    url: string,
    videoId: string,
    __v: number,
    _id: string
};