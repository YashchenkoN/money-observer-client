import moment from 'moment';

export const isLoggedIn = (token, expiration) => {
    if (!token) {
        return false;
    }

    const now = moment();
    return now.isSameOrBefore(moment(expiration));
};