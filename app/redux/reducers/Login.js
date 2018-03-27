import {LOGIN} from "../constants/ActionTypes";

const defaultState = {
    isLoggedIn: false,
    token: null
};

export default function reducer(state = defaultState, action) {
    console.log('LOGIN STATE: ', state);
    console.log('LOGIN ACTION: ', action);

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