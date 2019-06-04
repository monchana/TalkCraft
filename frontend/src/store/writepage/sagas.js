import { takeEvery, take, put, fork } from './node_modules/redux-saga/effects'
import { push } from './node_modules/react-router-redux'
import { callUrl, callUrlImg } from '../sagas'
import * as writePageActions from './actions'
import { getPage } from './node_modules/components'

const defaultURL = 'http://127.0.0.1:8000/'
const yesornoPostUrl = `${defaultURL}yesorno/write/`
const yesornoDetailUrl = `${defaultURL}yesorno/detail/`


export function* getPostPage({ postId }) {
  try {
    if (postId === 'default') {
      console.log(postId)
      yield put(writePageActions.getPageSuccess(null, null, null, null,
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
      yield put(writePageActions.getPageSuccess(postId, author, title, 
        mainTopic, summary, timeLimit, totalTimeLimit, wordLimit, 
        textA, photoA, textB, photoB, openStatus))
    }
  } catch (err) {
    console.log(err)
    yield put(writePageActions.getPageFail())
  }
}

export function* watchgetPostDetailPage() {
  yield takeEvery(writePageActions.getPage, getPostPage)
}

export function* postReview({ postId, author, title, mainTopic, summary, 
  timeLimit, totalTimeLimit, wordLimit, textA, photoA, textB, photoB, 
  openStatus }) {
  try {
    const data = {
        postId, author, title, mainTopic, summary, timeLimit, 
        totalTimeLimit, wordLimit, textA, photoA, textB, photoB, 
        openStatus
    }

    let post_page_data = new FormData()
    post_page_data.append('title', title)
    post_page_data.append('mainTopic', mainTopic)
    post_page_data.append('summary', summary)
    post_page_data.append('timeLimit', timeLimit)
    post_page_data.append('totalTimeLimit', totalTimeLimit)
    post_page_data.append('wordLimit', wordLimit)
    post_page_data.append('textA', textA)
    if (photoA != null) {
      post_page_data.append('photoA', photoA)
    }
    post_page_data.append('textB', textB)
    if (photoB != null) {
        post_page_data.append('photoA', photoB)
      }
    post_page_data.append('openStatus', openStatus)
    console.log(author)
    if (postId === 'default') { // post new review
      const response = yield callUrlImg('POST', yesornoPostUrl, 
      post_page_data)
    } else { // edit existing review
      const response = yield callUrlImg('PUT', 
      `${yesornoDetailUrl}${postId}/`, post_page_data)
    }
    yield put(writePageActions.writePageSuccess())
  
    yield put(push(`/${author}/archive`))
    window.location.reload()
    
  } catch (err) {
    console.log(err)
    yield put(writePageActions.writePageFail())
  }
}

export function* watchPostRequest() {
  yield takeEvery(writePageActions.writePage, postReview)
}

export default function* () {
  yield fork(watchgetPostDetailPage)
  yield fork(watchPostRequest)
}