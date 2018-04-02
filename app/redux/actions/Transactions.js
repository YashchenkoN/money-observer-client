import {userService} from "../../services/UserService";
import {GET_TRANSACTIONS, GET_TRANSACTIONS_FAILED, GET_TRANSACTIONS_LOADING} from "../constants/ActionTypes";

export const getTransactions = (token) => {
    return dispatch => {

        dispatch(loading(true));

        userService.login(username, password)
            .then(resp => resp.json())
            .then(json => {
                    dispatch(loading(false));

                    dispatch({
                        type: GET_TRANSACTIONS,
                        transactions: json,
                        error: null
                    });
                }
            )
            .catch(err => {
                dispatch(loading(false));
                dispatch(failed(err.message))
            })
    }
};

export const loading = (isLoading) => {
    return {
        type: GET_TRANSACTIONS_LOADING,
        isLoading: isLoading
    }
};

export const failed = (error) => {
    return {
        type: GET_TRANSACTIONS_FAILED,
        error: error
    }
};