import { all, fork } from 'redux-saga/effects';
import ResultSaga from './userSaga';
export default function* rootSaga() {
    yield all([fork(ResultSaga)]);
}
