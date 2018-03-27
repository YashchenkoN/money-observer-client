import { combineReducers } from 'redux';
import registration from './Registration';
import login from './Login';
import common from './Common'

const rootReducer = combineReducers({
    registration,
    login,
    common
});

export default rootReducer;