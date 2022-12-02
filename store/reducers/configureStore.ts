import { createStore, Store } from "redux";
import rootReducer from ".";

// store 생성
export default function configureStore():Store {
    const store = createStore(
        rootReducer,
    );
    return store;
}