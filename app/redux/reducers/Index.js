import { combineReducers } from 'redux';
import registration from './Registration';
import login from './Login';

const rootReducer = combineReducers({
    registration,
    login
});

export default rootReducer;