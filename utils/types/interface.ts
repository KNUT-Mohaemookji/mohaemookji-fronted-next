import React, {ReactNode} from 'react';


// -----kakaomap-----
declare global {
    interface Window {
      kakao: any;
    }
}
  
// --------------- props ----------------
export interface ChildrenProps {
    children?: ReactNode | undefined
}
// main
export interface IMainTextProps{
    item: string,
    children: ReactNode,
    bracketStart: string,
    bracketEnd: string,
    li_text: string[]
}

// cooking-video
export interface ICookingVideo { 
    then(arg0: (res: any) => any): unknown;
    channelId: string,
    keyword: string,
    theme: string,
    thumbnail: string,
    title: string,
    url: string,
    videoId: string,
    __v?: number,
    _id?: string
};

export interface IVideoListViewProps {
    cookingData: ICookingVideo[],
    categoryCookingData: string[],
    category: string[]
}

export interface IVideoValue {
    category: string[];
    modalState: boolean,
    videoData: unknown,
    setVideoData: unknown
}

export interface IVideoModalProps {
    cookingData?: ICookingVideo,
    getData?: ICookingVideo[] | undefined,
    clickVideoIndex: number
}

// recipe
export interface IRecipeData {
    [key: string]: string
}

export interface IRecipeProps {
    recipeData: IRecipeData[],
    count?: number
}

// ---------- object -------------
export interface categoryData {
    data?: string[],
    message: string,
    item: string[],
}