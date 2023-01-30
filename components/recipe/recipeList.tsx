import React from 'react';
import RecipeModal from './recipeModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { useRecipeModalState } from './hooks/useRecipeModalState';
import { IRecipeData } from './types/interface';
import RecipeItem from './recipeItem';

const RecipeListView = ({ recipeData }: IRecipeData & any) => {
    const recipe = recipeData.COOKRCP01.row;
    const { clickRecipeData, getRecipeData, clickModal  } = useRecipeModalState(recipe);

    const state = useSelector((state: RootState) => state.recipe);
    
    return (
        <>
            <div className="recipelist_contain">
                <div className="inner">
                    {
                        getRecipeData.map((data, index) => {
                            return (
                                <RecipeItem key={index} data={ data } index={ index } clickModal={clickModal} />
                            )
                        })
                    }
                    <button className="more_button" onClick={() => { }}>더 보기</button>
                    {
                        state.recipeState === true
                        ?
                        <div className="recipe_modal" >
                            <div className="background-black"/>
                            <RecipeModal clickRecipeData={ clickRecipeData } />
                        </div>
                       : null
                    }
                </div>
            </div>
            <style jsx>{`
                *{
                    list-style: none;
                }
                .background-black{
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: rgba(0, 0, 0, .7);
                }
                .recipelist_contain{
                    position: relative;
                    width: 100vw;
                    height: 100vh;
                    .inner{
                        display: flex;
                        justify-content: space-around;
                        margin: 3% auto;
                        flex-wrap: wrap;
                        gap: 50px;
                        width: 70vw;
                    }
                    .more_button{
                        width: 300px;
                        height: 50px;
                        color: #fff;
                        background-color: #A6BB8D;
                        border: 0;
                        border-radius: 10px;
                        margin: auto;
                        font-size: 18px;
                        font-weight: 700;
                    }
                    .recipe_modal{
                        position: fixed;
                        display: flex;
                        justify-content: center;
                    }
                }
            `}</style>
        </>
    );
};

export default RecipeListView;