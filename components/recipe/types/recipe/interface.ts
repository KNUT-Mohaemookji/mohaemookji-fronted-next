// recipe
export interface IRecipeData {
    [key: string]: string,
}

export interface IRecipeDataList {
    clickRecipeData: IRecipeData
}

export interface IRecipeProps {
    recipeData: IRecipeData,
    count?: number
}

export interface recipeItemProps {
    data: IRecipeData,
    index: number,
    clickModal: (data: IRecipeData) => void
}

export interface ICookingVideo { 
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

export interface IRecipeModalContainProps {
    recipeState?: boolean,
    clickRecipeData: IRecipeData
}

// redux
export interface IRecipeDataInitialState {
    pending: boolean;
    error: boolean;
    recipeData: IRecipeData[];
    menuName: string;
}