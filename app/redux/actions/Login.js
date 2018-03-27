import {userService} from "../../service/UserService";
import {FAILED, LOADING, LOGIN} from "../constants/ActionTypes";

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