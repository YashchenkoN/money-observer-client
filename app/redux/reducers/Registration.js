import {FAILED, LOADING, REGISTER} from "../constants/ActionTypes";

const defaultState = {
    isLoggedIn: false,
    token: null
};

export default function reducer(state = defaultState, action) {
    console.log('REGISTER STATE: ', state);
    console.log('REGISTER ACTION: ', action);

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