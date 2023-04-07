import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { getRcipeData } from '../../../store/reducers/getRecipeData';
import { useRouter } from 'next/router';
import { IRecipeData } from '../types/recipe/interface';
import { AppDispatch } from '../types/recipe/type';

export const useGetRecipe = () => {
    const router = useRouter();
    const [getRecipeData, setRecipeData] = useState<IRecipeData[]>();
    const recipeDataStore = useSelector((state: RootState) => state.getRecipeData);
    const dispatch = useDispatch<AppDispatch>(); 
    const [pending, setPending] = useState(true);


    const recipeData = () => {
        if(recipeDataStore.pending === false) {
            setPending(recipeDataStore.pending);       
            setRecipeData(recipeDataStore.recipeData);   
        } else {
            if(typeof router.query.slug === 'string') {
                dispatch(getRcipeData(router.query.slug));
            }
        }
    }
    useEffect(() => {
        recipeData();
    }, [recipeDataStore.pending]);
    

    return {
        getRecipeData,
        pending
    }
};