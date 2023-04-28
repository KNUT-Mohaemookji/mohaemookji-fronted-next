import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../../store/reducers/recipe';
import { FiX } from 'react-icons/fi';
import { IRecipeModalContainProps } from '../types/recipe/interface';
import RecipeMart from './martModal';
import RecipeVideo from './recipeVideo';
import RecipeModal from './recipeModal';
import * as S from '../style/recipeModal';

const MainModal = ({ clickRecipeData }: IRecipeModalContainProps) => {
    const dispatch = useDispatch();
    return (
        <>
            <S.ModalContent>
                <S.ModalInner>
                    <S.Close onClick={() => { dispatch(actions.recipe_modal()) }}><FiX/></S.Close>
                    <RecipeModal clickRecipeData={clickRecipeData}/>
                    <RecipeVideo/>
                    <RecipeMart/>
                </S.ModalInner>
            </S.ModalContent>
        </>
    );
};

export default MainModal;