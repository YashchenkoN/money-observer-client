import { createStore } from 'redux';
import rootReducer from './reducers/Index';

let store = createStore(rootReducer);

export default store;