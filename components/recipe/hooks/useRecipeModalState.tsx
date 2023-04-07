import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../../store/reducers/recipe';
import { AppDispatch } from '../types/recipe/type';

export const useRecipeModalState = () => {
    const [clickRecipeData, setClickRecipeData] = useState({});
    const [recipeModalState, setRecipeModalState] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>(); // 타입 수정하기.
    
    const clickModal = (modalData: React.SetStateAction<{}>) => {
        dispatch(actions.recipe_modal());
        setClickRecipeData(modalData);
        setRecipeModalState(true);
    }
    return {
        clickRecipeData,
        clickModal,
    }
};