import {userService} from "../../service/UserService";
import {REGISTER, LOGIN, LOGOUT, FAILED, LOADING} from "../constants/ActionTypes";
import {failed, loading} from "./Common";

export const register = (username, password, firstName, lastName) => {
    return dispatch => {

        dispatch(loading(true));

        userService.register(username, password, firstName, lastName)
            .then(
                tokenResp => {
                    dispatch(loading(false));

                    dispatch({
                        type: REGISTER,
                        token: tokenResp.token
                    });
                },
                error => {
                    dispatch(loading(false));
                    dispatch(failed(error))
                }
            );
    };
};

export const login = (username, password) => {

    return userService.login(username, password)
        .then(
            tokenResp => {
                return {
                    type: LOGIN,
                    token: tokenResp.token
                }
            },
            error => {
                return {
                    type: LOGIN,
                    error: error
                }
            }
        )
};

export const logout = () => {
    return {
        type: LOGOUT
    };
};