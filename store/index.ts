import { combineReducers } from 'redux';
import recipe from './reducers/recipe';
import getRecipeData from './reducers/getRecipeData';

const rootReducer = combineReducers({
    recipe, 
    getRecipeData
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;