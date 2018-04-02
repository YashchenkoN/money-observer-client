import {TRANSACTIONS} from "../constants/Api";

export const transactionService = {
    getTransactions
};

function getTransactions(token) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': token
        }
    };

    return fetch(TRANSACTIONS, requestOptions);
}