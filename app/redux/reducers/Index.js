import {combineReducers} from 'redux';
import register from './Registration';
import login from './Login';
import navigator from "./Navigator"

const rootReducer = combineReducers({
    register,
    login,
    navigator
});

export default rootReducer;