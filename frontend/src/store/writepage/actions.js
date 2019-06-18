import * as ACTIONTYPES from "./actionTypes"

//Do I need to use method in Velopert page?
//Might be better to use shell method

//Neeeeeed full adjustment
//DO I NEED TO MAKE FIX FOR EVERY POSSIBLE CASE???????ls
//
export const writePage = (postId, author, title, mainTopic, summary, timeLimit, totalTimeLimit,
    wordLimit, textA, photoA, textB, photoB, openStatus) => ({
  type: ACTIONTYPES.WRITE_REQUEST,
  data: { postId, author, title, mainTopic, summary, timeLimit, totalTimeLimit,
    wordLimit, textA, photoA, textB, photoB, openStatus },
})

//fail to post page
export const writePageFail = () => ({ 
    type: ACTIONTYPES.WRITE_FAIL,  
})

//Success to post page
export const writePageSuccess = () => ({ 
    type: ACTIONTYPES.WRITE_SUCCESS,  
})

//Image upload function
export const imageUpload = (photo) => ({
    type: ACTIONTYPES.IMAGEUPLOAD,
    data : { photo },
})

//Page to return yesorno detail page
export const getYesOrNoDetail = (postId) => ({
    type: ACTIONTYPES.GET_DETAIL,
    data : { postId },
})

//fail to return yesorno page
export const getYesOrNODetailFail = () => ({
    type : ACTIONTYPES.GET_DETAIL_FAIL
})

//success to return yesorno page
export const getYesOrNoDetailSuccess = (postId, author, title, mainTopic, summary, timeLimit, 
    totalTimeLimit, wordLimit, textA, photoA, textB, photoB, openStatus) => ({
    type : ACTIONTYPES.GET_DETAIL_SUCCESS,

    //return status changes accroding to open time 
    data : {postId, author, title, mainTopic, summary, timeLimit, 
        totalTimeLimit, wordLimit, textA, photoA, textB, photoB, openStatus}, 
})


//Changing input function : should be unncessary
export const inputChange = (category, value) => ({
    type: ACTIONTYPES.INPUTCHANGE,
    data : { category, value },
})
