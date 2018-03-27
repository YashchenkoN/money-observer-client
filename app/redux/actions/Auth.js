import {userService} from "../../service/UserService";
import {REGISTER, LOGIN, LOGOUT} from "../constants/ActionTypes";

export const register = (username, password, firstName, lastName) => {
    return userService.register(username, password, firstName, lastName)
        .then(
            tokenResp => {
                return {
                    type: REGISTER,
                    token: tokenResp.token
                }
            },
            error => {
                return {
                    type: REGISTER,
                    error: error
                }
            }
        );
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