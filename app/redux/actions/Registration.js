import {userService} from "../../service/UserService";
import {FAILED, LOADING, REGISTER} from "../constants/ActionTypes";

export const register = (username, password, firstName, lastName) => {
    return dispatch => {

        dispatch(loading(true));

        userService.register(username, password, firstName, lastName)
            .then(
                resp => {
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
        type: LOADING,
        isLoading: isLoading
    }
};

export const failed = (error) => {
    return {
        type: FAILED,
        error: error
    }
};