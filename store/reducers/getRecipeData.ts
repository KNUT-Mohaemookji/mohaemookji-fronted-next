import { handleActions } from 'redux-actions';
import { IRecipeData, IRecipeDataInitialState } from '../../components/recipe/types/recipe/interface';
import { recipeInstance } from '../../utils/api/api';

const initialState: IRecipeDataInitialState = {
    pending: true,
    error: false,
    recipeData: []
}

const RECIPE_DATA_PENDING = 'getRecipData/RECIPE_DATA_PENDING';
const RECIPE_DATA_SUCCESS = 'getRecipData/RECIPE_DATA_SUCCESS';
const RECIPE_DATA_FAIL = 'getRecipData/RECIPE_DATA_FAIL';

// api 불러오는 함수
async function getRecipeApi() {
    const getData = await recipeInstance.get('/');
    return getData;
}

// 데이터를 불러오는 동안 dispatch 실행.
export const getRcipeData = () => async (dispatch: (arg0: { type: string; payload?: unknown; }) => void) => {
    // 불러오는 동안 
    dispatch({type: RECIPE_DATA_PENDING});
    try {
        const resRecipeData = await getRecipeApi();

        dispatch({
            type: RECIPE_DATA_SUCCESS,
            payload: resRecipeData
        });
    }catch (err) {
        dispatch ({
            type: RECIPE_DATA_FAIL,
            payload: err
        });
        throw (err);
    }
}

export default handleActions({
    [RECIPE_DATA_PENDING]: (state: IRecipeDataInitialState) => {
        return {
            ...state,
            pending: true,
            error: false,
        }
    },
    [RECIPE_DATA_SUCCESS]: (state: IRecipeDataInitialState, action: { payload: { data: { COOKRCP01: IRecipeData; }; } }) => {
        return {
            ...state,
            pending: false,
            recipeData: action.payload.data.COOKRCP01
        }
    },
    [RECIPE_DATA_FAIL]: (state: IRecipeDataInitialState) => {
        return {
            ...state,
            pending: false,
            error: true
        }
    }
}, initialState);