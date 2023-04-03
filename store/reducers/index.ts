import { combineReducers } from 'redux';
import recipe from './recipe';
import getRecipeData from './getRecipeData';

const rootReducer = combineReducers({
    recipe, 
    getRecipeData
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;