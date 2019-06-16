import { initialState } from './selectors'
import * as ACTIONTYPES from './actionTypes'
import swal from 'sweetalert'


//TODO NEEEEEED FIXXXXXXXX

const writePageReducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTIONTYPES.IMAGEUPLOAD:
    return {
        ...state,
        photo : action.photo
    }
  case ACTIONTYPES.WRITE_FAIL:
    const user = action.data
    localStorage.setItem('user', JSON.stringify(action.data))
    window.location.reload()
    .then(() => {
      return Object.assign({}, state, {
        isLoggedIn: true,
        user,
      })
    })
  case ACTIONTYPES.LOGOUT:
    localStorage.removeItem('user')
    window.location.reload()
    .then(() => {
      return Object.assign({}, state, {
        isLoggedIn: false,
        user: null,
      })
    })
  case ACTIONTYPES.SUCCESS_SIGNUP:
     swal({
       title: 'Welcome to TalkCraft!',
       text: 'You have signed up successfully!',
       button: 'Ok',
     })
     .then (() => {
       window.location.reload()
     })
  default:
    return state
  }
}

export default writePageReducer
