import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../store/reducers/recipe';
import { RootState } from '../../../store/reducers';
import { getRcipeData } from '../../../store/reducers/getRecipeData';
import { useRouter } from 'next/router';

export const useGetRecipe = () => {
    const router = useRouter();
    const [getRecipeData, setRecipeData] = useState([]);
    const recipeDataStore = useSelector((state: RootState) => state.getRecipeData);
    const dispatch = useDispatch<any>(); // 타입 수정하기.
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