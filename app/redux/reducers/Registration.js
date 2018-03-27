import {FAILED, LOADING, REGISTER} from "../constants/ActionTypes";

const defaultState = {
    isLoggedIn: false,
    token: '',
    isLoading: false,
    error: ''
};

export default function reducer(state = defaultState, action) {
    console.log('REGISTER STATE: ', state);
    console.log('REGISTER ACTION: ', action);

    switch (action.type) {
        case LOADING:
            return Object.assign({}, state, {
                isLoading: action.isLoading
            });
        case REGISTER:
            return Object.assign({}, state, {
                isLoggedIn: action.isLoggedIn,
                token: action.token
            });
        case FAILED:
            return Object.assign({}, state, {
                error: action.error
            });
        default:
            return state;
    }
}