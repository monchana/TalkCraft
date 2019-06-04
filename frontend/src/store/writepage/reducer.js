import { initialState } from './selectors'
import * as writePageActions from './actions'
import swal from './node_modules/sweetalert'

const handleChange = (e) => {
  this.setState({
      [e.target.name]: e.target.value
  });
}

//TODO NEEEEEED FIXXXXXXXX

const writePageReducer = (state = initialState, action) => {
  let next = state
  //const isLoggedIn = localStorage.has
  switch (action.type) {
    case writePageActions.IMAGEUPLOAD:
      return {
          ...next,
          photo : writePageActions.photo,
      }

    case writePageActions.WRITE_FAIL:
      return next

    case writePageActions.WRITE_REQUEST:
      return next

    case writePageActions.GET_PAGE_FAIL:
      return next

    case writePageActions.GET_PAGE:
      state.postId = action.postId
      return next

    case writePageActions.GET_PAGE_SUCCESS:
      return {
        ...next,
        author: writePageActions.author,
        title: writePageActions.title,
        mainTopic: writePageActions.mainTopic,
        summary: writePageActions.summary,
        timeLimit: writePageActions.timeLimit,
        totalTimeLimit: writePageActions.totalTimeLimit,
        wordLimit: writePageActions.wordLimit,
        textA: writePageActions.textA,
        photoA: writePageActions.photoA,
        textB: writePageActions.textB,
        photoB: writePageActions.photoB
        //Need to insert  open status
        //,openStatus: action.openStatus
      }
    //굳이 inputChange를 할 필요가 있을까? handleChange는 나중에 넣어도 되지 않을까?
    /*case writePageActions.inputChange:
      return {...next, {writePageActions.category : writePageActions.value} }
      */
    default:
      return next
  }
}


export default writePageReducer


/*
  case writePageActions.INPUTCHANGE:
    if (writePageActions.category=='title'){
      return {...next, title: writePageActions.value}
    }
    else if (writePageActions.category=='mainTopic'){
      return {...next, mainTopic : writePageActions.value}
    }
    else if (writePageActions.category=='summary'){
      return {...next, summary : writePageActions.value}
    }
    else if (writePageActions.category=='timeLimit'){
      return {...next, timeLimit : writePageActions.value}
    }
    else if (writePageActions.category=='totalTimeLimit'){
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
    }*/