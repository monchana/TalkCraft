import { takeEvery, all, take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from '../actions'
import * as ACTIONTYPES from "./actionTypes"

const defaultURL = 'http://127.0.0.1:8000/'
const yesornoPostUrl = `${defaultURL}yesorno/write/`
const yesornoDetailUrl = `${defaultURL}yesorno/detail/`


export function* getPostPage({ postId }) {
  try {
    if (postId === 'default') {
      console.log(postId)
      yield put(actions.getYesOrNoDetailSuccess(null, null, null, null,
        null, null, null, null, null, null,
        null, null, false))
    }
    else {
      //console.log('get post review detail saga')
      const yesornoDetail = yield callUrl('GET', `${yesornoDetail}${reviewId}/`)
      const jsonData = yield yesornoDetail.json()
      console.log(jsonData)
      const { postId, author, title, mainTopic, summary, timeLimit,
        totalTimeLimit, wordLimit, textA, photoA,
        textB, photoB, openStatus } = jsonData
      yield put(actions.getYesOrNoDetailSuccess(postId, author, title,
        mainTopic, summary, timeLimit, totalTimeLimit, wordLimit,
        textA, photoA, textB, photoB, openStatus))
    }
  } catch (err) {
    console.log(err)
    yield put(actions.getYesOrNODetailFail())
  }
}

export function* watchgetPostDetailPage() {
  yield takeEvery(ACTIONTYPES.GET_DETAIL, getPostPage)
}

export function* postYesOrNo({ postId, author, title, mainTopic, summary,
  timeLimit, totalTimeLimit, wordLimit, textA, photoA, textB, photoB,
  openStatus }) {
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

export default function* () {
  yield fork(watchgetPostDetailPage)
}
