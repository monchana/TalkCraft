import { initialState } from './selectors'
import * as ACTIONTYPES from './actionTypes'
import swal from 'sweetalert'


//TODO NEEEEEED FIXXXXXXXX

const writePageReducer = (state = initialState, action) => {
  switch (action.type) {
  case ACTIONTYPES.SUCCESS_WRITE_YESNO:
    console.log("?")
  default:
    return state
  }
}

export default writePageReducer
