import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import CancelButton from 'components'
import PostButton from 'components'
import ImageUpload from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`
const Promblematic = () => {
  throw (new Error('버그가 나타났다!'));
  return (
    <div>
      
    </div>
  );
};

class OverallFixxxxxx extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  static defaultProps = {
    onIncrement: () => console.warn('onIncrement is not defined'),
    object: {},
    array: []
  }

  componentWillUnmount= () => {
    this.props.onUnmount()
  }

  //Require Fiiiixxxxx
  //Telling that component mounted
  //Need to check v16.3
  componentDidMount = () => {
    const { children} = this.props;
    if (children !== 'default') {
      this.props.onLoad(children)
    }
  }

  //Do not update if title or main Topic is invalid
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    if ((title == null) || (mainTopic == null)) return false;
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    if (prevState.array != this.state.array) {
      const {
        scrollTop, scrollHeight
      } = this.list;
      return {
        scrollTop, scrollHeight
      };
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      const { scrollTop } = this.list;
      if (scrollTop !== snapshot.scrollTop) return; 
      //If the function already exists, do not process it
      const diff = this.list.scrollHeight - snapshot.scrollHeight;
      this.list.scrollTop += diff;
    }
  }
  //Catch Bugggg
  componentDidCatch(error, info) {
    this.setState({
      error : true
    });
  }
  

  render() {
    if (this.state.error) return (<h1>Buggggg!</h1>);
    if (!this.props.object || !this.props.array || this.props.array.length ===0) return null;

    

    let title, mainTopic, summary, timeLimit, 
    totalTimeLimit, wordLimit, descriptionA, descriptionB
    
    let titleText, mainTopicText, summaryText, timeLimitText,
    totalTimeLimitText, wordLimitText, descriptionAText, descriptionBText

    const onInputChange = (e) => {
      this.props.changeInput(e.target.name, e.target.value)
    }

    if (this.props.statefunction.writePage.title){
      titleText  = this.props.statefunction.writePage.title
    }
    else {
      titleText = ''
    }

    if (this.props.statefunction.writePage.mainTopic){
      mainTopicText = this.props.statefunction.writePage.mainTopic
    }
    else {
      mainTopicText = ''
    }
    
    if (this.props.statefunction.writePage.summary){
      summaryText = this.props.statefunction.writePage.summary
    }
    else {
      summaryText = ''
    }

    if (this.props.statefunction.writePage.timeLimit){
      timeLimitText = this.props.statefunction.writePage.timeLimit
    }
    else {
      timeLimitText = ''
    } 
    if (this.props.statefunction.writePage.totalTimeLimit){
      totalTimeLimitText = this.props.statefunction.writePage.totalTimeLimit
    }
    else {
      totalTimeLimitText = ''
    }

    if (this.props.statefunction.writePage.wordLimit){
      wordLimitText = this.props.statefunction.writePage.wordLimit
    }
    else {
      wordLimitText = ''
    }
    if (this.props.statefunction.writePage.descriptionA){
      descriptionAText = this.props.statefunction.writePage.descriptionA
    }
    else {
      descriptionAText = ''
    }

    if (this.props.statefunction.writePage.descriptionB){
      descriptionBText = this.props.statefunction.writePage.descriptionB
    }
    else {
      descriptionBText = ''
    }

    //Need to close if t
    const onPost = () => {
      if (title.value && mainTopic.value && summary.value && timeLimit.value &&
        totalTimeLimit.value && wordLimit.value && descriptionA.value && descriptionB.value){
          this.props.onPostYesOrNo(
            this.props.children,
            this.props.statefunction.writepage.author, // Neeeeeed Adjustment
            this.refs.title.value,
            this.refs.mainTopic.value,
            this.refs.summary.value,
            this.refs.timeLimit.value,
            this.refs.totalTimeLimit.value,
            this.refs.wordLimit.value,
            this.refs.descriptionA.value,
            this.refs.descriptionB.value,
            this.props.statefunction.writepage.photoA,
            this.props.statefunction.writepage.photoB
        )
      }
    }
    return (
      <div>
        { this.state.title === null && <Promblematic /> }
      <h5>Title{' '}<input value={node => {title= node;}} /></h5>
      <h5>Main Topic{' '}<input ref={node => {mainTopic = node}} /></h5>
      <h5>Summary{' '}<input ref={node => {mainTopic = node}} /></h5>
      <h5>Time Limit{' '}<input ref={node => {score = node}} /></h5>
      <h5>Total Time Limit{' '}<input ref={node => {score = node}} /></h5>
      <h5>Word Limit{' '}<input ref={node => {score = node}} /></h5>
      <h5>Description for A{' '}<input ref={node => {score = node}} /></h5>
      <h5>Photo A{' '}<ImageUpload/></h5>
      <h5>Description for B{' '}<input ref={node => {score = node}} /></h5>
      <h5>Photo B{' '}<ImageUpload/></h5>
      <h5>
        <PostButton onClick={this.onPost}>
          Post
        </PostButton>
      </h5>
      <h5>
        <CancelButton onClick={this.onPost}>
          Cancel
        </CancelButton>
      </h5>
    </div>
    );
  }  
}
/*
Overall.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}
*/
export default OverallFixxxxxx
