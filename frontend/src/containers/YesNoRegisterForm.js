import { connect } from "react-redux"
import { YesNoRegisterForm } from 'components/molecules/YesNoRegisterForm'
import * as actions from 'store/writePage/actions'

const mapStateToProps = state => ({
  statefunction: state,
})

const mapDispatchToProps = dispatch => ({
  onCall: (postId) => {
    dispatch(actions.getYesOrNoDetail(postId))
  },
  writeYesNo: (postId, author, title, mainTopic, summary, timeLimit, totalTimeLimit,
    wordLimit, candidateA, textA, photoA, candidateB, textB, photoB) => {
    dispatch(actions.writePage(postId, author, title, mainTopic, summary, timeLimit, totalTimeLimit,
      wordLimit, candidateA, textA, photoA, candidateB, textB, photoB))},

  onCreate: (postId, author, title, mainTopic, summary, timeLimit, totalTimeLimit,
    wordLimit, candidateA, textA, photoA, candidateB, textB, photoB) => {
        console.log('Container for onPost : Write page function')
        console.log(author)
    dispatch(writePageActions.writePage(postId, author, title, mainTopic, summary, timeLimit, totalTimeLimit,
    wordLimit, candidateA, textA, photoA, candidateB, textB, photoB))
  }
  
})

export default connect(mapStateToProps, mapDispatchToProps)(YesNoRegisterForm)
