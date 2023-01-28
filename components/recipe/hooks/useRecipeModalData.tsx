import { useEffect, useState } from 'react';
import { IRecipeData } from '../types/interface';

export function useRecipeModalState(clickRecipeData: IRecipeData) {
    const [menual] = useState<string[]>([]);
    const [menualImg] = useState<string[]>([]);
    const [recipeModalData, setRecipeModalData] = useState<IRecipeData>({});
    useEffect(() => {
        for(let data in clickRecipeData){
            if (data.includes('MANUAL_IMG')) {
                clickRecipeData[data] && menualImg.push(clickRecipeData[data]);
            }
            if (data.includes('MANUAL') && !clickRecipeData[data].includes('http')) {
                clickRecipeData[data] && menual.push(clickRecipeData[data]);
                
            }
        }   
        setRecipeModalData(clickRecipeData);
    }, [clickRecipeData, menual, menualImg]);

    return { menualImg, menual, setRecipeModalData, recipeModalData };
};