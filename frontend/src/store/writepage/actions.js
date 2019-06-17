import * as ACTIONTYPES from "./actionTypes"

//Neeeeeed full adjustment
//DO I NEED TO MAKE FIX FOR EVERY POSSIBLE CASE???????ls
//
export const writePage = (postId, author, title, mainTopic, summary, timeLimit, totalTimeLimit,
    wordLimit, textA, photoA, textB, photoB, openStatus) => ({
  type: ACTIONTYPES.WRITE_REQUEST,
  data: { postId, author, title, mainTopic, summary, timeLimit, totalTimeLimit,
    wordLimit, textA, photoA, textB, photoB, openStatus },
})

export const writePageFail = () => ({
    type: ACTIONTYPES.WRITE_FAIL,
})

export const writePageSuccess = () => ({
    type: ACTIONTYPES.WRITE_SUCCESS,
})

export const imageUpload = (photo) => ({
    type: ACTIONTYPES.IMAGEUPLOAD,
    data : { photo },
})

// FIXME
export const writeYesNo = (title, username) => ({
  type: ACTIONTYPES.WRITE_YESNO_REQUEST,
  data: { title, username },
})

export const writeYesNoSuccess = data => ({
  type: ACTIONTYPES.SUCCESS_WRITE_YESNO,
  data
})
