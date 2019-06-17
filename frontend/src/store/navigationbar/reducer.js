import { initialState } from './selectors'
import * as ACTIONTYPES from './actionTypes'
import swal from 'sweetalert'


const navigationBarReducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTIONTYPES.SUCCESS_LOGIN:
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
    window.location.assign("http://localhost:3000")
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

export default navigationBarReducer
