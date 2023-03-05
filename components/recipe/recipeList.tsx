import React from 'react';
import RecipeModal from './recipeModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { useRecipeModalState } from './hooks/useRecipeModalState';
import { IRecipeData } from './types/interface';
import RecipeItem from './recipeItem';
import * as S from './style/recipeList';

const RecipeListView = ({ recipeData }: IRecipeData & any) => {
    const recipe = recipeData.COOKRCP01.row;
    const { clickRecipeData, getRecipeData, clickModal  } = useRecipeModalState(recipe);

    const state = useSelector((state: RootState) => state.recipe);
    
    return (
        <>
            <S.RecipeListContain>
                <S.RecipeListInner>
                    {
                        getRecipeData.map((data, index) => {
                            return (
                                <RecipeItem key={index} data={ data } index={ index } clickModal={clickModal} />
                            )
                        })
                    }
                    <S.MoreButton onClick={() => { }}>더 보기</S.MoreButton>
                    {
                        state.recipeState === true
                        ?
                        <S.RecipeModal >
                            <S.BackgroundBlack/>
                            <RecipeModal clickRecipeData={ clickRecipeData } />
                        </S.RecipeModal>
                       : null
                    }
                </S.RecipeListInner>
            </S.RecipeListContain>
        </>
    );
};

export default RecipeListView;