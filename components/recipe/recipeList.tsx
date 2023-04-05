import RecipeModal from './recipeDetailModal/mainModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { useRecipeModalState } from './hooks/useRecipeModalState';
import { IRecipeData } from './types/recipe/interface';
import RecipeItem from './recipeItem';
import * as S from './style/recipeList';
import Loading from '../common/loading';
import { useEffect, useState } from 'react';

const RecipeListView = () => {
    const { pending, clickRecipeData, getRecipeData, clickModal } = useRecipeModalState();
    const recipeStore = useSelector((state: RootState) => state.recipe);
    return (
        <>
            <S.RecipeListContain>
                {
                    pending === true
                    ? <Loading/>
                    : 
                    <S.RecipeListInner>
                    {
                        getRecipeData && getRecipeData.map((data: IRecipeData, index: number) => {
                            return (
                                <RecipeItem key={index} data={ data } index={ index } clickModal={clickModal} />
                            )
                        })
                    }
                    {
                        recipeStore.recipeState === true
                        ?
                        <S.RecipeModal >
                            <S.BackgroundBlack/>
                            <RecipeModal clickRecipeData={ clickRecipeData } />
                        </S.RecipeModal>
                    : null
                    }
                    </S.RecipeListInner>
                }
            </S.RecipeListContain>
        </>
    );
};

export default RecipeListView;