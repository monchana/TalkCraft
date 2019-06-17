import { takeEvery, all, take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from '../actions'
import * as ACTIONTYPES from "./actionTypes"

export function* writeAsync({data}) {
  try {
    // FIXME
    // need to add contents
    const title = data.title;
    const password = 'test'
    const userauth = window.btoa('test' + ':' + password);
    const response = yield call(fetch, "http://localhost:8000/yesorno/write/", {
        method: 'POST',
        headers: {
            'Authorization' : 'Basic ' + userauth,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title
        }),
     });
    // const response = yield call(api.post, "http://localhost:8000/yesorno/write/", data);
    yield put(actions.writeYesNoSuccess({title, ...response}))
  } catch (e) {
    swal({
      title: 'Sorry...',
      text: 'That username is already taken',
      button: 'Try another',
    })
    console.error(e)
  }
}

export function* watchWrite() {
  yield takeEvery(ACTIONTYPES.WRITE_YESNO_REQUEST, writeAsync);
}

export default function* () {
  yield fork(watchWrite);
}
