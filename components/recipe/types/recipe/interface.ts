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