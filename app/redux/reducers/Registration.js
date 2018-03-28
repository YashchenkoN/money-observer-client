import {FAILED, LOADING, REGISTER} from "../constants/ActionTypes";

const defaultState = {
    isLoggedIn: false,
    token: null
};

export default function reducer(state = defaultState, action) {

    switch (action.type) {
        case REGISTER:
            return Object.assign({}, state, {
                isLoggedIn: action.isLoggedIn,
                token: action.token
            });
        default:
            return state;
    }
}