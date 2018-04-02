import {userService} from "../../services/UserService";
import {LOGIN, LOGIN_FAILED, LOGIN_LOADING} from "../constants/ActionTypes";

export const login = (username, password) => {
    return dispatch => {

        dispatch(loading(true));

        userService.login(username, password)
            .then(resp => resp.json())
            .then(json => {
                    dispatch(loading(false));

                    dispatch({
                        type: LOGIN,
                        token: json.token,
                        expiration: json.expiresOn,
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