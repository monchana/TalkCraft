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

class Overall extends React.Component {

  render() {
    let title
    let mainTopic
    let summary
    let timeLimit
    let totalTimeLimit
    let wordLimit
    let descriptionA
    let descriptionB
    //Need to close if t
    const onPost = () => {
      if (title.value && mainTopic.value && summary.value && timeLimit.value &&
        totalTimeLimit.value && wordLimit.value && descriptionA.value && descriptionB.value){
          this.props.onPostYesOrNo(
            this.props.children,
            this.props.statefunction.writepage.author, // Neeeeeed Adjustment
            title.value,
            mainTopic.value,
            summary.value,
            timeLimit.value,
            totalTimeLimit.value,
            wordLimit.value,
            descriptionA.value,
            descriptionB.value,
            this.props.statefunction.writepage.photoA,
            this.props.statefunction.writepage.photoB
        )
      }
    }
    return (
      <div>
      <h5>Title{' '}<input ref={node => {title= node;}} /></h5>
      <h5>Main Topic{' '}<input ref={node => {mainTopic = node}} /></h5>
      <h5>Summary{' '}<input ref={node => {mainTopic = node}} /></h5>
      <h5>Time Limit{' '}<input ref={node => {score = node}} /></h5>
      <h5>Total Time Limit{' '}<input ref={node => {score = node}} /></h5>
      <h5>Word Limit{' '}<input ref={node => {score = node}} /></h5>
      <h5>Description for A{' '}<input ref={node => {score = node}} /></h5>
      <h5>Photo A{' '}<ImageUpload /></h5>
      <h5>Description for B{' '}<input ref={node => {score = node}} /></h5>
      <h5>Photo B{' '}<ImageUpload /></h5>
      <h5>
        <PostButton onClick={onPost}>
          Post
        </PostButton>
      </h5>
      <h5>
        <CancelButton onClick={onPost}>
          Cancel
        </CancelButton>
      </h5>
    </div>

    )
 
  }

  
}


Overall.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default Overall
