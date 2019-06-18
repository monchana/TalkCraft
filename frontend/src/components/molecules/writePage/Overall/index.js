import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import CancelButton from 'components'
import PostButton from 'components'
import ImageUpload from '../../../containers/writePage/ImageUpload'

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

class Overall extends React.Component {

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
    console.log("componentWillUnmount")
  }

  //Require Fiiiixxxxx
  //Telling that component mounted
  //Need to check v16.3
  componentDidMount = () => {
    const { yesornopost } = this.props;
    if (yesornopost !== 'default') {
      this.props.onCall(yesornopost)
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
    let imgUrlTextA
    let imgUrlTextB
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
    if (this.props.statefunction.PostPage.photoA) {
      imgUrlTextA = this.props.statefunction.PostPage.photoA
    } else {
      imgUrlTextA = ''
    }
    if (this.props.statefunction.PostPage.photoB) {
      imgUrlTextB = this.props.statefunction.PostPage.photoB
    } else {
      imgUrlTextB = ''
    }
/*
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
*/
    //Need to close if t
    /*onPost = () => {
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
    }*/


    //handleSubmit 의 형태가 훨씬 좋기는 한데.... 모르겠다


/*
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.onCreate(this.state);
      this.setState({
          author: '',
          title: '',
          mainTopic: '',
          summary: '',
          timelimit: '',
          totalTimeLimit: '',
          wordLimit: '',
          descriptionA: '',
          photoA: null,
          descriptionB: '',
          photoB: null
      })
    }
/*
//과연 어떤 식으로 진행하는게 옳을까?
    onPost= () => {
      if (title.value && mainTopic.value && summary.value && timeLimit.value &&
        totalTimeLimit.value && wordLimit.value && descriptionA.value && descriptionB.value){
          this.props.onCreate(
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
    }*/

    return (
      <div>
        <Wrapper>
        { this.state.title === null && <Promblematic /> }
        <div>
          Title{' '}
          <input
            value={this.state.title}
            name="title"
            placeholder="title"
            onChange={this.handleChange}
            />
        </div>
        <div>
          Main Topic{''}
          <input
            value={this.state.mainTopic}
            name="mainTopic"
            placeholder="mainTopic"
            onChange={this.handleChange}
            />
        </div>
        <div>
          Summary{' '}
          <input
            value={this.state.summary}
            name="summary"
            placeholder="summary"
            onChange={this.handleChange}
            />
        </div>
        <div>
          Time Limit{' '}
          <input
            value={this.state.timeLimit}
            name="timeLimit"
            placeholder="timeLimit"
            onChange={this.handleChange}
            />
        </div>
        <div>
          Total Time Limit{' '}
          <input
            value={this.state.totalTimeLimit}
            name="totalTimeLimit"
            placeholder="totalTimeLimit"
            onChange={this.handleChange}
            />
        </div>
        <div>
          Word Limit{' '}
          <input
            value={this.state.wordLimit}
            name="wordLimit"
            placeholder="wordLimit"
            onChange={this.handleChange}
            />
        </div>
        <div>
          Description A{' '}
          <input
            value={this.state.descriptionA}
            name="descriptionA"
            placeholder="descriptionA"
            onChange={this.handleChange}
            />
        </div>
        <div>
          Photo A{' '}
          <ImageUpload imageUrl={imgUrlTextA}/>
        </div>
        <div>
          <input
            value={this.state.descriptionB}
            name="descriptionB"
            placeholder="descriptionB"
            onChange={this.handleChange}
            />
        </div>
        <div>
          Photo B{' '}
          <ImageUpload imageUrl={imgUrlTextB}/>
        </div>
        {/* <PostButton type = 'submit' onClick={this.onPost}>Post</PostButton> */}
        <PostButton type = 'submit' onClick={this.handleSubmit}>Post</PostButton>
        <CancelButton type = 'submit' onClick={this.handleSubmit}>Cancel</CancelButton>
     </Wrapper>
    </div>
    );
  }  
}

Overall.propTypes = {
  reverse: PropTypes.bool,
  yesornopost: PropTypes.node,
}

export default Overall
