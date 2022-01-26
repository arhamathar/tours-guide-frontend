//@ts-nocheck
import {
    LOADING_START,
    LOADING_END,
    INCREMENT_RESPONSE,
    DECREMENT_RESPONSE,
    LOGIN_USER,
    LOGOUT_USER,
} from 'Redux/actionTypes/user';

const initialState = {
    value: 0,
    loading: false,
    user: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_START: {
            console.log('LOADING START');
            const newState = { ...state };
            newState.loading = true;
            return newState;
        }
        case LOADING_END: {
            console.log('LOADING END');
            const newState = { ...state };
            newState.loading = false;
            return newState;
        }
        case INCREMENT_RESPONSE: {
            // console.log('3rd');
            const newState = { ...state };
            newState.value += action.response.value;
            return newState;
        }
        case DECREMENT_RESPONSE: {
            const newState = { ...state };
            newState.value -= action.response.value;
            return newState;
        }
        case LOGIN_USER: {
            const newState = { ...state };
            newState.user = action.payload;
            console.log(state, actions);
        }
        case LOGOUT_USER: {
            const newState = { ...state };
            newState.user = null;
            return newState;
        }
        default: {
            return state;
        }
    }
};

export default reducer;
