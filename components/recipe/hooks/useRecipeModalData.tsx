import { useEffect, useState } from 'react';
import { IRecipeData } from '../types/recipe/interface';

export function useRecipeModalData(clickRecipeData: IRecipeData) {
    const [menual] = useState<string[]>([]);
    const [menualImg] = useState<string[]>([]);
    const [recipeModalData, setRecipeModalData] = useState({});

    useEffect(() => {
        for(let data in clickRecipeData){
            if (data.includes('MANUAL_IMG') && !menualImg.includes(clickRecipeData[data])){
                clickRecipeData[data] && menualImg.push(clickRecipeData[data]);
            }
            // !clickRecipeData[data].includes('http')
            if (data.includes('MANUAL') && !menual.includes(clickRecipeData[data])) {
                clickRecipeData[data] && menual.push(clickRecipeData[data]);
            }
        }
        setRecipeModalData(clickRecipeData);

    }, [clickRecipeData, menual, menualImg]);

    return { menualImg, menual, setRecipeModalData, recipeModalData };
};