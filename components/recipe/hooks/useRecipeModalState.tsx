import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRecipeData, IRecipeProps } from '../types/interface';
import { RootState } from '../../../store/reducers';
import { actions, RECIPE_MODAL } from '../../../store/reducers/recipe';

export const useRecipeModalState = (recipeData: IRecipeData) => {
    const [getRecipeData, setRecipeData] = useState<IRecipeData[]>([]);
    const [clickRecipeData, setClickRecipeData] = useState({});
    const [recipeModalState, setRecipeModalState] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('recipeData', recipeData)
        setRecipeData(recipeData.COOKRCP01.row)
        
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