import { combineReducers } from 'redux';
import registration from './Registration';
import login from './Registration';

const rootReducer = combineReducers({
    registration,
    login
});

export default rootReducer;