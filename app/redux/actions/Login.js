import {userService} from "../../service/UserService";
import {LOGIN} from "../constants/ActionTypes";
import {failed, loading} from "./Common";

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