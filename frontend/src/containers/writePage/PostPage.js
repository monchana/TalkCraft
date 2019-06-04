import { connect } from 'react-redux'
import React, { Component } from 'react';
import { Overall } from '../../components/pages/molecules/Overall'
import { getPage, writePage } from '../../store/writePage/actions'
import { bindActionCreators } from 'redux';
import * as writePageActions from '../src/store/writePage/actions';

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

const mapDispatchToProps = (dispatch) => {
    return {
      onCall: (postId) => {
        dispatch(getPage(postId))
      },

      onCreate: (postId, author, title, mainTopic, summary, timeLimit, totalTimeLimit, 
        wordLimit, textA, photoA, textB, photoB, openStatus) => {
        console.log('Container for onPost : Write page function')
        console.log(author)
        dispatch(postReview(postId, author, title, mainTopic, summary, timeLimit, totalTimeLimit, 
            wordLimit, textA, photoA, textB, photoB, openStatus))
      }
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Overall)