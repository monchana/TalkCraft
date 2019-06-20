import { connect } from 'react-redux'
import React, { Component } from 'react';
import { Overall } from '../../components/pages/molecules/Overall'
import * as writePageActions from '../../store/writePage/actions'
import { bindActionCreators } from 'redux';

/*
class writePageContainer extends React.Component {
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

}
export default connect(
  (state) => ({
    statefunction : state
  }),
  (dispatch) =>  bindActionCreators(writePageActions, dispatch)
)(writePageContainer)
*/
const mapStateToProps = (state) => { 
    return {
	statefunction : state
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
      //Calling detail page
      onCall: (postId) => {
        dispatch(writePageActions.getYesOrNoDetail(postId))
      },
      //post new page
      onCreate: (postId, author, title, mainTopic, summary, timeLimit, totalTimeLimit,
        wordLimit, candidateA, textA, photoA, candidateB, textB, photoB, openStatus) => {
        console.log('Container for onPost : Write page function')
        console.log(author)
        dispatch(writePageActions.writePage(postId, author, title, mainTopic, summary, timeLimit, totalTimeLimit,
          wordLimit, candidateA, textA, photoA, candidateB, textB, photoB, openStatus))
      }
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Overall)