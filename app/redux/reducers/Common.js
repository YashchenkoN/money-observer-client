import {FAILED, LOADING, REGISTER} from "../constants/ActionTypes";

const defaultState = {
    isLoading: false,
    error: null
};

export default function reducer(state = defaultState, action) {

    switch (action.type) {
        case LOADING:
            return {
                ... state,
                isLoading: action.isLoading
            };
        case FAILED:
            return {
                ... state,
                error: action.error
            };
        default:
            return state;
    }
}