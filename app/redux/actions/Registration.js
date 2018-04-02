import {userService} from "../../services/UserService";
import {REGISTER, REGISTER_FAILED, REGISTER_LOADING} from "../constants/ActionTypes";

export const register = (email, password, firstName, lastName) => {
    return dispatch => {

        dispatch(loading(true));

        userService.register(email, password, firstName, lastName)
            .then(resp => resp.json())
            .then(json => {
                    dispatch(loading(false));

                    dispatch({
                        type: REGISTER,
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
    };
};

export const loading = (isLoading) => {
    return {
        type: REGISTER_LOADING,
        isLoading: isLoading
    }
};

export const failed = (error) => {
    return {
        type: REGISTER_FAILED,
        error: error
    }
};