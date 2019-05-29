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
    type: ACTIONTYPES.WRITE_FAIL  
})

export const writePageSuccess = () => ({ 
    type: ACTIONTYPES.WRITE_SUCCESS  
})

export const imageUpload = (photo) => ({
    type: ACTIONTYPES.IMAGEUPLOAD,
    data : { photo },
})

export const getPage = (postId) => ({
    type: ACTIONTYPES.GET_PAGE,
    data : { postId },
})

export const getPageFail = () => ({
    type : ACTIONTYPES.GET_PAGE_FAIL
})

export const getPageSuccess = (postId, author, title, mainTopic, summary, timeLimit, 
    totalTimeLimit, wordLimit, textA, photoA, textB, photoB, openStatus) => ({
    type : ACTIONTYPES.GET_PAGE_SUCCESS,
    //Need to change open status of the get post 
    data : {postId, author, title, mainTopic, summary, timeLimit, 
        totalTimeLimit, wordLimit, textA, photoA, textB, photoB, openStatus}, 
})

export const inputChange = (category, value) => ({
    type: ACTIONTYPES.INPUTCHANGE,
    data : { category, value },
})