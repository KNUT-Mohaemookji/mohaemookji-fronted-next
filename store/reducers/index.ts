import { combineReducers } from 'redux';
import testReducer from './testReducer';
import getVideo from './getVideo';

const rootReducer = combineReducers({
    testReducer,
    getVideo
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;