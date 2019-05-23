import { initialState } from './selectors'
import * as ACTIONTYPES from './actionTypes'
import swal from 'sweetalert'


//TODO NEEEEEED FIXXXXXXXX

const writePageReducer = (state = initialState, action) => {
  let state = state
  if (!state) {
    state = {
      author,
      isEdit: false,
      title: null,
      isLoggedIn,
      mainTopic: null,
      summary: null,
      timeLimit: null,
      totalTimeLimit: null,
      wordLimit: null,
      textA: null,
      photoA: null,
      textB: null,
      photoB: null,
      openStatus: false
    }
  }
  switch (action.type) {
  case ACTIONTYPES.IMAGEUPLOAD:
    return {
        ...state,
        photo : action.photo,
    }

  case ACTIONTYPES.WRITE_FAIL:
    return state

  case ACTIONTYPES.WRITE_REQUEST:
    return state

  case ACTIONTYPES.GET_PAGE_FAIL:
    return state

  case ACTIONTYPES.GET_PAGE:
    state.postId = action.postId
    return state

  case ACTIONTYPES.GET_PAGE_SUCCESS:
    return {
      ...state,
      author: action.author,
      title: action.title,
      mainTopic: action.mainTopic,
      summary: action.summary,
      timeLimit: action.timeLimit,
      totalTimeLimit: action.totalTimeLimit,
      wordLimit: action.wordLimit,
      textA: action.textA,
      photoA: action.photoA,
      textB: action.textB,
      photoB: action.photoB
      //Need to insert  open status
      //,openStatus: action.openStatus
    }

  default:
    return state
  }
}

export default writePageReducer
