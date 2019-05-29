import { connect } from 'react-redux'
import React, { Component } from 'react';
import { Overall } from '../../components/pages/molecules/Overall'
import { getDetail, writePage } from '../../store/writePage/actions'
import { bindActionCreators } from 'redux';
import * as writePageActions from '../src/store/writePage/actions';

class writePageContainer extends Component {

}


export default connect(
  (state) => ({
    statefunction : state
  }),
  (dispatch) => ({
    writePageActions: bindActionCreators(writePageActions, dispatch)
  })
);

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
  