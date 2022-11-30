import { compose, createStore, Store } from "redux";
import rootReducer from ".";
      
declare global {
    interface Window {
        // 크롬에서 테스트할때 Redux 확장 프로그램을 활용하기 위해 넣은 것.
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

// store 생성
export default function configureStore():Store {
    const composeEnhancers = typeof (window as any) !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        rootReducer,
        composeEnhancers()
    );
    return store;
}