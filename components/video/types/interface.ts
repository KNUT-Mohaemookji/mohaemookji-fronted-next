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
    _id?: string,
};

export interface IVideoListViewProps {
    cookingData?: ICookingVideo[],
    categoryCookingData?: ICookingVideo[],
    category?: string[]
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

// ---------- object -------------
export interface categoryData {
    data?: string[],
    message: string,
    item: string[],
}