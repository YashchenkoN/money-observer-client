import {userService} from "../../service/UserService";
import {REGISTER} from "../constants/ActionTypes";
import {failed, loading} from "./Common";

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