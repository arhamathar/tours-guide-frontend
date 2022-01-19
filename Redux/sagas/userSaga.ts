// @ts-nocheck
import { put, takeLatest, all, fork, call } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actionTypes/user';

// Here saga will watch the action types you want to perform
const getResponse = () => {
    return axios.post('https://jsonplaceholder.typicode.com/posts');
};
function* WatchIncrement(action) {
    // will take action of INCREMENT_REQUEST
    const response = yield call(getResponse);
    // console.log(response, '2nd');
    yield put(types.loadingReqStart());
    yield put(types.incrementResponse(action.data)); // The Handler will not come to here unless and untill
    //the response is not getting
    yield put(types.loadingReqEnd());
}
function* WatchDecrement(action) {
    // Will Have actions of DECREMENT_REQUEST
    yield put(types.decrementResponse(action.data));
}
function* increment() {
    // !IMPORTANT,Here Saga gets started
    yield takeLatest(types.INCREMENT_REQUEST, WatchIncrement);
}
function* decrement() {
    yield takeLatest(types.DECREMENT_REQUEST, WatchDecrement);
}

export default function* resultSaga() {
    yield all([fork(increment), fork(decrement)]);
}
