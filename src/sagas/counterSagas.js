import {INCREASE, DECREASE} from '../actions/type';
import {takeEvery} from 'redux-saga/effects';

function* increment() {
  console.log('This is increment saga');
}

export function* watchIncrement() {
  yield takeEvery(INCREASE, increment);
}

function* decrement() {
  console.log('This is decrement saga');
}

export function* watchDecrement() {
  yield takeEvery(DECREASE, decrement);
}
