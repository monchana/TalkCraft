import { takeEvery, all, take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from '../actions'
import * as ACTIONTYPES from "./actionTypes"
import swal from 'sweetalert'

(postId, author, title, 
    mainTopic, summary, timeLimit, totalTimeLimit, wordLimit, 
    textA, photoA, textB, photoB, openStatus)


export function* postYesOrNo({data}) {
    try {
        const postId = data.postId
        const author = data.author
        const title = data.title
        const mainTopic = data.mainTopic
        const timeLimit = data.timeLimit
        const totalTimeLimit = data.totalTimeLimit
        const wordLimit = data.wordLimit
        const 

        
    }
}
