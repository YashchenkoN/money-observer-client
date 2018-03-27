import {LOGIN} from "../constants/ActionTypes";

const defaultState = {
    isLoggedIn: false,
    token: '',
    isLoading: false,
    error: ''
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, {
                isLoggedIn: true,
                token: action.token
            });
        default:
            return state;
    }
}