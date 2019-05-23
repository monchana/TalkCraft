import { connect } from 'react-redux'
import { Overall } from '../../components/pages/molecules/Overall'
import { getDetail, writePage } from '../../store/writepage/actions'

const mapStateToProps = (state) => { 
    return {
	statefunction : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onGetDetail: (postId) => {
        console.log('Container for onPost : Write page function')
        console.log(author)
        dispatch(getDetail(postId))
      },
      onPost: (postId, author, title, mainTopic, summary, timeLimit, totalTimeLimit, 
        wordLimit, textA, photoA, textB, photoB, openStatus) => {
        console.log('Container for onPost : Write page function')
        console.log(author)
        dispatch(postReview(postId, author, title, mainTopic, summary, timeLimit, totalTimeLimit, 
            wordLimit, textA, photoA, textB, photoB, openStatus))
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Overall)
  