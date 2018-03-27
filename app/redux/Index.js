import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './reducers/Index';
import thunk from "redux-thunk";
import {persistStore} from "redux-persist";

let store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
);

persistStore(store);

export default store;