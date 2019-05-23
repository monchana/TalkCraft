import * as ACTIONTYPES from "./actionTypes"

//Neeeeeed full adjustment
//DO I NEED TO MAKE FIX FOR EVERY POSSIBLE CASE???????ls

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

export const getDetail = (postId) => ({
    type: ACTIONTYPES.GET_DETAIL,
    data : { postId },
})

export const getDetailFail = () => ({
    type : ACTIONTYPES.GET_DETAIL_FAIL,
})

export const getDetailSuccess = (postId, author, title, mainTopic, summary, timeLimit, 
    totalTimeLimit, wordLimit, textA, photoA, textB, photoB, openStatus) => ({
    type : ACTIONTYPES.GET_DETAIL_SUCCESS,
    //Need to change open status of the get post 
    data : {postId, author, title, mainTopic, summary, timeLimit, 
        totalTimeLimit, wordLimit, textA, photoA, textB, photoB, openStatus}, 
})

export const postWritePageReqeust = (postId, author, title, 
    mainTopic, summary, timeLimit, totalTimeLimit, wordLimit, 
    textA, photoA, textB, photoB, openStatus) => ({
    type : ACTIONTYPES.POST_WRITE_REQUEST,
    data : {postId, author, title, mainTopic, summary, timeLimit, 
        totalTimeLimit, wordLimit, textA, photoA, textB, photoB, openStatus}, 
})