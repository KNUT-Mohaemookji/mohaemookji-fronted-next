import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../store/reducers/recipe';
import { RootState } from '../../../store/reducers';
import { getRcipeData } from '../../../store/reducers/getRecipeData';

export const useRecipeModalState = () => {
    const [getRecipeData, setRecipeData] = useState([]);
    const [clickRecipeData, setClickRecipeData] = useState({});
    const [recipeModalState, setRecipeModalState] = useState<boolean>(false);
    const recipeDataStore = useSelector((state: RootState) => state.getRecipeData);
    const dispatch = useDispatch<any>(); // 타입 수정하기.
    const [pending, setPending] = useState(true);

    useEffect(() => {
        if(recipeDataStore.pending === false) {
            setPending(recipeDataStore.pending);       
            setRecipeData(recipeDataStore.recipeData.row);   
        } else {
            dispatch(getRcipeData());
        }
    }, [recipeDataStore.pending]);
    
    const clickModal = (modalData: React.SetStateAction<{}>) => {
        dispatch(actions.recipe_modal());
        setClickRecipeData(modalData);
        setRecipeModalState(true);
    }
    return {
        clickRecipeData,
        getRecipeData,
        clickModal,
        pending
    }
};