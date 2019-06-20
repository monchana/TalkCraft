import React, { Component, PropTypes } from 'react'
import { MDBBtn, MDBInput } from "mdbreact";
import styled from 'styled-components'
import { Input } from 'components'
import { Button } from 'react-bootstrap'
import ImageUpload from 'containers'
import { font, palette } from 'styled-theme'
//import { upateProfileImage } from 'services'
import cookie from 'react-cookies'

const padding = {
  margin: 10,
}

export class YesNoRegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      title: '',
      postId: null, 
      author: '', 
      mainTopic: '',
      summary: '',
      timeLimit: '',
      totalTimeLimit: '', 
      wordLimit: '',
      candidateA: '',
      textA: '', 
      photoA: null, 
      candidateB: '',
      textB: '', 
      photoB: null, 
      openStatus: false
    }
    this.upload22 = React.createRef();
  }
  category = {
    options : [
      "음식", "운동", "연애", "학업"
    ]
  }
  handleSubmit = event => {
    event.preventDefault()
    const { username, password } = this.state
    this.props.fetchLogin(username, password)
  }
/*
  _handleSubmit = e => {
    e.preventDefault();
    const token = cookie.load("jwt");
    upateProfileImage(this.upload22.current.files[0], token);
  };
*/
  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleKeyPress = event => {
    if (event.key == "Enter") {
      const { username, password } = this.state
      this.props.fetchLogin(username, password)
    }
  }

  handleWrite = () => {
    const {postId, author, title, mainTopic, summary, timeLimit, totalTimeLimit,
      wordLimit, candidateA, textA, photoA, candidateB, textB, photoB} = this.state
    // const user = JSON.parse(localStorage.getItem('user')).username
    this.props.writeYesNo(postId, author, title, mainTopic, summary, timeLimit, totalTimeLimit,
    wordLimit, candidateA, textA, photoA, candidateB, textB, photoB)
  }

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('user')).username
    this.setState({
      username: user
    })
  }
  render() {
    let imgUrlTextA, imgUrlTextB
    if (this.props.statefunction.writePage.photoA) {
      //path directory to A?
    imgUrlTextA = this.props.statefunction.writePage.photoA
    } else {
    imgUrlTextA = ''
    }
    if (this.props.statefunction.writePage.photoB) {
      imgUrlTextB = this.props.statefunction.writePage.photoB
    } else {
      imgUrlTextB = ''
    }


    return (
    <div>
      <div className="grey-text">
         <Button
           style={{float:"right"}}
           onClick={this.handleWrite}
         >
           Write
         </Button>
         <MDBInput 
           hint="Title"
           outline
           size="lg"
           name='title'
           onChange={this.handleInputChange}
         />
         <MDBInput 
           hint="Main Topic"
           outline
           size="lg"
           name='mainTopic'
           onChange={this.handleInputChange}
         /> 
        
         <MDBInput 
           type ="textarea"
           hint="Summary"
           outline
           size="lg"
           name='Summary'
           icon = "pencil-alt"
           onChange={this.handleInputChange}
         />   
         <MDBInput 
           type ="number"
           hint="Time Limit"
           outline
           name='timeLimit'
           disabled
           onChange={this.handleInputChange}
         /> 
         <MDBInput 
           type ="number"
           hint="Total Time Limit"
           outline
           name='totalTimeLimit'
           onChange={this.handleInputChange}
         /> 
         <MDBInput 
           type ="number"
           hint="Word Limit"
           outline
           name='wordLimit'
           disabled
           onChange={this.handleInputChange}
         /> 
         <MDBInput 
           hint="Candidate A"
           outline
           name='candidateA'
           onChange={this.handleInputChange}
         /> 
            <div className="photoA">
              <div className="photoA">
                <span className="photoA" id="photoA">
                Upload
                 </span>
             </div>
             <div className="photoA">
               <input
                  type="file"
                  className="photoA"
                  id="photoA"
                  aria-describedby="inputGroupFileAddon01"
                />
              <label className="photoA" htmlFor="photoA">
                Photo A
              </label>
            </div>
          </div>

         <MDBInput 
           type ="textarea"
           hint="Text Description on A"
           outline
           name='textA'
           onChange={this.handleInputChange}
         /> 

         <MDBInput 
           hint="Candidate B"
           outline
           name='candidateB'
           onChange={this.handleInputChange}
         /> 

          <div className="photoB">
              <div className="photoB">
                <span className="photoB" id="photoB">
                Upload
                 </span>
             </div>
             <div className="photoB">
               <input
                  type="file"
                  className="photoB"
                  id="photoB"
                  aria-describedby="inputGroupFileAddon01"
                />
              <label className="photoB" htmlFor="photoB">
                Photo B
              </label>
            </div>
          </div>


         <MDBInput 
           type ="textarea"
           hint="Text Description on B"
           outline
           name='textB'
           onChange={this.handleInputChange}
         /> 
         
          <div> I hereby Agree that.... </div>
          <MDBInput label="Filled-in unchecked" checked type="checkbox" id="checkbox2" />

         
       </div>
       
     </div>
    )
  }
}
