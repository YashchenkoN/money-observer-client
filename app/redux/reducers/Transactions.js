import {
    GET_TRANSACTIONS,
    GET_TRANSACTIONS_FAILED,
    GET_TRANSACTIONS_LOADING
} from "../constants/ActionTypes";

const defaultState = {
    transactions: null,
    isLoading: false,
    error: null
};

export default function reducer(state = defaultState, action) {

    switch (action.type) {
        case GET_TRANSACTIONS:
            return {
                ...state,
                transactions: action.transactions
            };
        case GET_TRANSACTIONS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case GET_TRANSACTIONS_FAILED:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}