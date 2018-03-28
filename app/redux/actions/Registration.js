import {userService} from "../../service/UserService";
import {REGISTER, REGISTER_FAILED, REGISTER_LOADING} from "../constants/ActionTypes";

export const register = (username, password, firstName, lastName) => {
    return dispatch => {

        dispatch(loading(true));

        userService.register(username, password, firstName, lastName)
            .then(resp => {
                    dispatch(loading(false));

                    dispatch({
                        type: REGISTER,
                        token: resp.json().token,
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