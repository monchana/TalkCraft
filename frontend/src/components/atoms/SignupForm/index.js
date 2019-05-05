import React, { Component, PropTypes } from 'react'

import { MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact"

export class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      passwordCheck: '',
      pwdDiff: true,
      submitDisabled: true,
    }
  }


  handleSubmit = event => {
    event.preventDefault()
    const { username, password } = this.state
    this.props.fetchSignup(username, password)
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
    //FIXME : Fancy way?
    //Password valid check -> enable submit
    if (event.target.name != 'username') {
      let passwordIsValid = (event.target.value == this.state.password)
                              || (event.target.value == this.state.passwordCheck)
      if(!passwordIsValid) {
        this.setState({ pwdDiff: true, submitDisabled: true })
      } else if(this.state.username != '') {
        this.setState({ pwdDiff: false, submitDisabled: false })
      }
    }

    //Username valid check -> enable submit
    if(event.target.name == 'username') {
      if((this.state.password != '') && (event.target.value != '') && (this.state.password == this.state.passwordCheck)){
        this.setState({ submitDisabled: false })
      } else {
        this.setState({ submitDisabled: true })
      }
    }
  }




  render() {
    return (
           <div>
            <div className="grey-text">
               <MDBInput
                 label="Username"
                 icon="user"
                 group
                 type="text"
                 validate
                 error="wrong"
                 success="right"
                 name="username"
                 value={this.state.username}
                 onInput={this.handleInputChange}
               />
               <MDBInput
                 label="Password"
                 className={this.state.pwdDiff ? "is-invalid" : "is-valid"}
                 icon="lock"
                 group
                 type="password"
                 validate
                 error="wrong"
                 success="right"
                 name="password"
                 value={this.state.password}
                 onInput={this.handleInputChange}
                 required
               />
               <MDBInput
                 label="Confirm password"
                 className={this.state.pwdDiff ? "is-invalid" : "is-valid"}
                 icon=" "
                 group
                 type="password"
                 validate
                 error="wrong"
                 success="right"
                 name="passwordCheck"
                 value={this.state.passwordCheck}
                 onInput={this.handleInputChange}
                 required
               >
               <div className="invalid-feedback">
                 Check your password
               </div>
               <div className="valid-feedback">Looks good!</div>
             </MDBInput>
            </div>


            <div className="text-center py-4 mt-3">
             <MDBBtn
               color="cyan"
               onClick={this.handleSubmit}
               disabled={this.state.submitDisabled}>
                 Sign Up
             </MDBBtn>
            </div>
           </div>

    )
  }
}
