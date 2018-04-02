import {FAILED, LOADING, LOGIN, LOGIN_FAILED, LOGIN_LOADING} from "../constants/ActionTypes";

const defaultState = {
    isLoggedIn: false,
    token: null,
    isLoading: false,
    error: null
};

export default function reducer(state = defaultState, action) {

    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                token: action.token,
                expiration: action.expiration
            };
        case LOGIN_LOADING:
            return {
                ... state,
                isLoading: action.isLoading
            };
        case LOGIN_FAILED:
            return {
                ... state,
                error: action.error
            };
        default:
            return state;
    }
}