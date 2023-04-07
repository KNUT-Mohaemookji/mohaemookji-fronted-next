import NotRecipe from './notRecipe';
import RecipeModalContain from './recipeModalContain';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useRecipeModalState } from './hooks/useRecipeModalState';
import { useGetRecipe } from './hooks/useGetRecipe';
import { IRecipeData } from './types/recipe/interface';
import RecipeItem from './recipeItem';
import * as S from './style/recipeList';
import Loading from '../common/loading';

const RecipeListView = () => {
    const { pending, getRecipeData} = useGetRecipe();
    const { clickRecipeData, clickModal } = useRecipeModalState();
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
                        getRecipeData && getRecipeData.length !== 0 
                        ? getRecipeData.map((data: IRecipeData, index: number) => {
                            return (
                                <RecipeItem key={index} data={ data } index={ index } clickModal={clickModal} />
                            )
                        })
                        : <NotRecipe/>
                    }
                    <RecipeModalContain clickRecipeData={clickRecipeData} recipeState={recipeStore.recipeState}/>
                    </S.RecipeListInner>
                }
            </S.RecipeListContain>
        </>
    );
};

export default RecipeListView;