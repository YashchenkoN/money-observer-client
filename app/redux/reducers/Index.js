import { combineReducers } from 'redux';
import register from './Registration';
import login from './Login';

const rootReducer = combineReducers({
    register,
    login
});

export default rootReducer;