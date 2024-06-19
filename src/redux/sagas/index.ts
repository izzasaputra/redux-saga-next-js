import { all, fork } from 'redux-saga/effects';
import { watchFetchData } from './user';

// Combine all your sagas
export default function* rootSaga() {
  yield all([
    fork(watchFetchData), // Add your individual sagas here
  ]);
}