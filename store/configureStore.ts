import { createStore, Store, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import rootReducer from "./index";
import Logger from 'redux-logger';

// store 생성
export default function configureStore():Store {
    const store = createStore(
        rootReducer,
        applyMiddleware(Logger, ReduxThunk)
    );
    return store;
}