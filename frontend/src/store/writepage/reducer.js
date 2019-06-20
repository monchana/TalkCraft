import { initialState } from './selectors'
import * as ACTIONTYPES from './actionTypes'
import swal from 'sweetalert'


//Might be better to use shell method

const handleChange = (e) => {
  this.setState({
      [e.target.name]: e.target.value
  });
}


/*TODO
1. Need to figure out a method to change input
2. Need to figure out how to change openStatus according to time

*/
const writePageReducer = (state = initialState, actions) => {
  let next = state
  if (!state) {
    state = {
      author,
      title: '',
      postId: null,
      candidateA: null,
      candidateB: null,
      summary: null,
      timeLimit: null,
      totalTimeLimit: null,
      wordLimit: null,
      textB: null,
      photoA: null,
      photoB: null,
      photoAURL: '',
      photoBURL: '',
    }
  }
  //const isLoggedIn = localStorage.has
  switch (actions.type) {
    case ACTIONTYPES.IMAGEUPLOAD:
      return {
          ...next,
          photo : actions.photo,
      }

    //If it succeeds post to next process
    case ACTIONTYPES.WRITE_SUCCESS:
      return next

    case ACTIONTYPES.WRITE_FAIL:
      return next

    //post page, return next status
    case ACTIONTYPES.WRITE_REQUEST:
      return next

    case ACTIONTYPES.GET_DETAIL:
      state.postId = writePageActions.postId
      return next
    
    case ACTIONTYPES.GET_DETAIL_FAIL:
      return next

    case ACTIONTYPES.GET_DETAIL_SUCCESS:
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
        photoB: writePageActions.photoB,
        //Need to insert  open status
        //,openStatus: action.openStatus
      }
    //굳이 inputChange를 할 필요가 있을까? handleChange는 나중에 넣어도 되지 않을까?
    /*case writePageActions.inputChange:
      return {...next, {writePageActions.category : writePageActions.value} }
      */
    case ACTIONTYPES.CANCELPAGE:
      return {
      }

    default:
      return next
  }
}

export default writePageReducer
