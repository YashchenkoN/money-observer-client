
export const userService = {
    register,
    login
};

function register(username, password, firstName, lastName) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName
        })
    };

    return fetch('/api/auth/signup', requestOptions);
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

    return fetch('/api/auth/signin', requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }

            return response.json();
        });
}