import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IRecipeData } from '../types/interface';
import { actions } from '../../../store/reducers/recipe';

export const useRecipeModalState = (recipeData: IRecipeData) => {
    const [getRecipeData, setRecipeData] = useState<IRecipeData[]>([]);
    const [clickRecipeData, setClickRecipeData] = useState({});
    const [recipeModalState, setRecipeModalState] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('recipeData step 1', recipeData)
        // console.log('recipeData', recipeData.COOKRCP01.row)
        setRecipeData(recipeData)
        
    }, [recipeData]);
    
    const clickModal = (modalData: React.SetStateAction<{}>) => {
        dispatch(actions.recipe_modal());
        setClickRecipeData(modalData);
        setRecipeModalState(true);
    }
    return {
        clickRecipeData,
        getRecipeData,
        clickModal
    }
};