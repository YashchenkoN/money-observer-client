import {SIGN_IN, SIGN_UP} from "../constants/Api";

export const userService = {
    register,
    login
};

function register(email, password, firstName, lastName) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        })
    };

    return fetch(SIGN_UP, requestOptions);
}

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    };

    return fetch(SIGN_IN, requestOptions);
}