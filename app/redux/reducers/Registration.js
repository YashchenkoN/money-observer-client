import {FAILED, LOADING, REGISTER, REGISTER_FAILED, REGISTER_LOADING} from "../constants/ActionTypes";

const defaultState = {
    isLoggedIn: false,
    token: null,
    isLoading: false,
    error: null
};

export default function reducer(state = defaultState, action) {

    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                token: action.token,
                expiration: action.expiration
            };
        case REGISTER_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case REGISTER_FAILED:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}