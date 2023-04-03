import axios from 'axios';
import {
    createAction,
    createReducer
} from 'typesafe-actions';

interface IRecipeInitialState {
    recipeState: boolean
}

const initialState: IRecipeInitialState = {
    recipeState: false,
}

export const RECIPE_MODAL = 'recipe/RECIPE_MODAL';

export const recipe_modal = createAction(RECIPE_MODAL)();

export const actions = { recipe_modal };

const recipe = createReducer(initialState, {
    [RECIPE_MODAL]: (state) => {
        return ({
            ...state,
            recipeState: !state.recipeState
        })
    }
});

export default recipe;