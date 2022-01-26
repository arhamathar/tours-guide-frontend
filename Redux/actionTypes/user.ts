// @ts-nocheck
export const INCREMENT_RESPONSE = 'INCREMENT_RESPONSE';
export const DECREMENT_RESPONSE = 'DECREMENT_RESPONSE';
export const INCREMENT_REQUEST = 'INCREMENT_REQUEST';
export const DECREMENT_REQUEST = 'DECREMENT_REQUEST';
export const LOADING_START = 'LOADING_START';
export const LOADING_END = 'LOADING_END';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGIN_USER';

export const incrementRequest = (data) => {
    return {
        type: INCREMENT_REQUEST,
        data: data,
    };
};

// dispatch({type : INCREMENT_REQUEST})
export const decrementRequest = (data) => {
    return {
        type: DECREMENT_REQUEST,
        data: data,
    };
};

export const loadingReqStart = () => {
    return {
        type: LOADING_START,
    };
};
export const loadingReqEnd = () => {
    return {
        type: LOADING_END,
    };
};

export const incrementResponse = (response) => {
    console.log('1st');
    return {
        type: INCREMENT_RESPONSE,
        response,
    };
};
export const decrementResponse = (response) => {
    return {
        type: DECREMENT_RESPONSE,
        response,
    };
};

export const loginUser = (payload) => {
    return {
        type: LOGIN_USER,
        payload,
    };
};

export const logoutUser = () => {
    return {
        type: LOGOUT_USER,
    };
};
