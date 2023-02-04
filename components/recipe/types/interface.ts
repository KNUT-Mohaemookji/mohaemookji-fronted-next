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

// export interface IRecipeModalFactor {
//     setClickRecipeData: any,
//     setRecipeModalState: React.Dispatch<React.SetStateAction<boolean>>;
// }

// -----kakaomap-----
declare global {
    interface Window {
      kakao: any;
    }
}

export interface ILocationType {
    // lat: number;
    // lng: number;
    // [key: string]: number;
    loaded: boolean;
    coordinates?: { lat: number, lng: number };
    error?: { code: number, message: string };
}