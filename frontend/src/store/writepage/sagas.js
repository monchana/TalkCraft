import { takeEvery, take, put, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { callUrl, callUrlImg } from '../sagas'
import * as actions from './actions'
import { getPage } from 'components'

const backendUrl = 'http://127.0.0.1:8000/'
//These two require adjustmenttttttttt
const reviewListUrl = `${backendUrl}Review/post/`
const reviewDetailUrl = `${backendUrl}Review/detail/`

export function* getPostPage({ postId }) {
  try {
    if (postId === 'default') { // post new review
      yield put(actions.getPageSuccess(null, null, null, null,
        null, null, null, null, null, null,
        null, null, false))
    }
    else { // edit existing review
      //console.log('get post review detail saga')
      //console.log(`${reviewDetailUrl}${reviewId}/`)
      const reviewDetail = yield callUrl('GET', `${reviewDetailUrl}${reviewId}/`)
      console.log('after getting')
      const jsonData = yield reviewDetail.json()
      console.log(reviewDetail)
      console.log(jsonData)
      const { postId, author, title, mainTopic, summary, timeLimit, 
        totalTimeLimit, wordLimit, textA, photoA, textB, photoB, openStatus } = jsonData
      yield put(actions.getPageSuccess(postId, author, title, mainTopic, summary, timeLimit, 
        totalTimeLimit, wordLimit, textA, photoA, textB, photoB, openStatus))
    }
  } catch (err) {
    console.log('get post review detail error')
    console.log(err)
    yield put(actions.getPageFail())
  }
}

export function* watchgetPostPage() {
  yield takeEvery(actions.getPage, getPostPage)
}

export function* postReview({ postId, author, title, mainTopic, summary, timeLimit, 
    totalTimeLimit, wordLimit, textA, photoA, textB, photoB, openStatus }) {
  try {
    //console.log('post review begin')
    //console.log(nickname)
    const data = {
        postId, author, title, mainTopic, summary, timeLimit, 
        totalTimeLimit, wordLimit, textA, photoA, textB, photoB, openStatus
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
    

    console.log('post review before callUrlImg')
    console.log(author)
    if (postId === 'default') { // post new review
      console.log('postreview callUrlImg 1')
      const response = yield callUrlImg('POST', reviewListUrl, post_page_data)
    } else { // edit existing review
      console.log('postreview callUrlImg 2')
      const response = yield callUrlImg('PUT', `${reviewDetailUrl}${postId}/`, post_page_data)
    }
    yield put(actions.postReviewSuccess())
    console.log('postReview saga after postReviewSuccess')
    console.log(nickname)
    yield put(push(`/${nickname}/archive`))
    window.location.reload()
    /* if(reviewId != 'default'){
      yield put(getReviewDetail(reviewId, nickname))
    } */
  } catch (err) {
    console.log(err)
    yield put(actions.postReviewFailed())
  }
}

export function* watchPostMeetingRequest() {
  yield takeEvery(actions.POST_REVIEW_REQUEST, postReview)
}

export default function* () {
  yield fork(watchGetPostReviewDetailRequest)
  yield fork(watchPostMeetingRequest)
}