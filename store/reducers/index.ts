import { combineReducers } from 'redux';
import testReducer from './testReducer';
import getVideo from './getVideo';
import recipe from './recipe';

const rootReducer = combineReducers({
    testReducer,
    getVideo,
    recipe
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;