// recipe
export interface IRecipeData {
    [key: string]: string,
    clickRecipeData: any,
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

export interface IRecipeModalContainProps {
    recipeState: boolean,
    clickRecipeData: {
        [key: string]: string
    }
}

// redux

export interface IRecipeDataInitialState {
    pending: boolean;
    error: boolean;
    recipeData: any; // 타입 수정하기.
    menuName: string;
}