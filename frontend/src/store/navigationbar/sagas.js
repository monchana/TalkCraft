import { takeEvery, all, take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from '../actions'
import * as ACTIONTYPES from "./actionTypes"
import swal from 'sweetalert'

export function* loginAsync({data}) {
  try {
    const username = data.username;
    const response = yield call(api.post, "http://localhost:8000/users/login/", data);
    yield put(actions.updateLoginState({username, ...response}))
  } catch (e) {
    swal({
      title: 'Login failed',
      text: 'Username or password is incorrect',
      button: 'Ok',
    })
    console.error(e)
  }
}

export function* watchLogin() {
  yield takeEvery(ACTIONTYPES.FETCH_LOGIN, loginAsync);
}

export function* signupAsync({data}) {
  try {
    const username = data.username;
    const response = yield call(api.post, "http://localhost:8000/users/", data);
    yield put(actions.updateSignupState({username, ...response}))
  } catch (e) {
    swal({
      title: 'Sorry...',
      text: 'That username is already taken',
      button: 'Try another',
    })
    console.error(e)
  }
}

export function* watchSignup() {
  yield takeEvery(ACTIONTYPES.FETCH_SIGNUP, signupAsync);
}

export default function* () {
  yield fork(watchLogin);
  yield fork(watchSignup);
}
