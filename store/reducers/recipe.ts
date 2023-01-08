import {
    createAction,
    ActionType,
    createReducer
} from 'typesafe-actions';

interface init {
    recipeState: boolean
}

const initialState: init = {
    recipeState: false
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