import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../../store/reducers/recipe';

export const useRecipeModalState = () => {
    const [clickRecipeData, setClickRecipeData] = useState({});
    const [recipeModalState, setRecipeModalState] = useState<boolean>(false);
    const dispatch = useDispatch<any>(); // 타입 수정하기.
    
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