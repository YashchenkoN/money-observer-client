import {userService} from "../../service/UserService";
import {LOGIN, LOGIN_FAILED, LOGIN_LOADING} from "../constants/ActionTypes";

export const login = (username, password) => {
    return dispatch => {

        dispatch(loading(true));

        userService.login(username, password)
            .then(resp => {
                    dispatch(loading(false));

                    dispatch({
                        type: LOGIN,
                        token: resp.json().token,
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
        type: LOGIN_LOADING,
        isLoading: isLoading
    }
};

export const failed = (error) => {
    return {
        type: LOGIN_FAILED,
        error: error
    }
};