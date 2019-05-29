import { initialState } from './selectors'
import * as ACTIONTYPES from './actionTypes'
import swal from 'sweetalert'


//TODO NEEEEEED FIXXXXXXXX

const writePageReducer = (state, action) => {
  let next = state
  //const isLoggedIn = localStorage.has
  if (!state) {
    state = {
      author,
      isEdit: false,
      title: null,
      //isLoggedIn,
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
        ...next,
        photo : action.photo,
    }

  case ACTIONTYPES.WRITE_FAIL:
    return next

  case ACTIONTYPES.WRITE_REQUEST:
    return next

  case ACTIONTYPES.GET_PAGE_FAIL:
    return next

  case ACTIONTYPES.GET_PAGE:
    state.postId = action.postId
    return next

  case ACTIONTYPES.GET_PAGE_SUCCESS:
    return {
      ...next,
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
  case ACTIONTYPES.INPUTCHANGE:
    if (action.category=='title'){
      return {...next, title: action.value}
    }
    else if (action.category=='mainTopic'){
      return {...next, mainTopic : action.value}
    }
    else if (action.category=='summary'){
      return {...next, summary : action.value}
    }
    else if (action.category=='timeLimit'){
      return {...next, timeLimit : action.value}
    }
    else if (action.category=='totalTimeLimit'){
      return {...next, totalTimeLimit : action.value}
    }
    else if (action.category=='wordLimit'){
      return {...next, wordLimit : action.value}
    }
    else if (action.category=='textA'){
      return {...next, textA : action.value}
    }
    else if (action.category=='textB'){
      return {...next, textB : action.value}
    }
    else {
      return next
    }
  
  default:
    return state
  }
}

export default writePageReducer
