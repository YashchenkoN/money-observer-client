const defaultState = {
    isLoggedIn: false,
    token: ''
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'REGISTER':
            return Object.assign({}, state, {
                isLoggedIn: true,
                token: action.token
            });
        case 'LOGIN':
            return Object.assign({}, state, {
                isLoggedIn: true,
                token: action.token
            });
        case 'LOGOUT':
            return Object.assign({}, state, {
                isLoggedIn: false,
                token: ''
            });
        default:
            return state;
    }
}