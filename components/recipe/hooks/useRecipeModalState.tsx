import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, RECIPE_MODAL } from '../../../store/reducers/recipe';
import { RootState } from '../../../store/reducers';
import {IRecipeModalFactor, IRecipeData} from '../types/interface';

export function useRecipeModalState(modalData: IRecipeData, { setClickRecipeData, setRecipeModalState }: IRecipeModalFactor) {
    // const state = useSelector((state: RootState) => state.recipe);
    const dispatch = useDispatch();
    // useEffect(() => {
        dispatch(actions.recipe_modal());
        setClickRecipeData(modalData);
        setRecipeModalState(true);
    // }, [dispatch, modalData, setClickRecipeData, setRecipeModalState]);
    return (
        <></>
    )
};