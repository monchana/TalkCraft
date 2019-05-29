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

class Overall extends Component {
    state = {
        title: '', 
        mainTopic: '', 
        /*
        summary: '', 
        timeLimit: '', 
        totalTimeLimit: '', 
        wordLimit: '', 
        descriptionA: '', 
        descriptionB: ''*/
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            title: '',
            mainTopic: ''
        })
    }
    render(){
        return (
            <wrapper onSubmit={this.handleSubmit}>
                <div>
                    Title
                </div>
                <input
                    placeholder="title"
                    value = {this.state.title}
                    onChange = {this.handleChange}
                />
                <div>
                    mainTopic
                </div>
                <input
                    placeholder="mainTopic"
                    value = {this.state.mainTopic}
                    onChange = {this.handleChange}
                />
                {/* repeat for all element */}
               
                {/*Find what is what to replace onPost*/}
                <PostButton type = 'submit' onClick={this.handleSubmit}>Post</PostButton>
                <CancelButton type = 'submit' onClick={this.handleSubmit}>Cancel</CancelButton>
            </wrapper>
        );//end of return
    
    }
} 

export default Overall