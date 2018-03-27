import {FAILED, LOADING} from "../constants/ActionTypes";


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