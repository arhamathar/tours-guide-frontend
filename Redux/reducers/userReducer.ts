//@ts-nocheck
import {
    LOADING_START,
    LOADING_END,
    INCREMENT_REQUEST,
    INCREMENT_RESPONSE,
    DECREMENT_REQUEST,
    DECREMENT_RESPONSE,
} from 'Redux/actionTypes/user';

const initialState = {
    value: 0,
    loading: false,
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
        default: {
            return state;
        }
    }
};

export default reducer;
