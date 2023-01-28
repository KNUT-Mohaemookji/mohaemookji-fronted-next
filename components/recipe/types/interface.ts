// recipe
export interface IRecipeData {
    [key: string]: string,
    COOKRCP01: string
}

export interface IRecipeProps {
    recipeData: IRecipeData,
    count?: number
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