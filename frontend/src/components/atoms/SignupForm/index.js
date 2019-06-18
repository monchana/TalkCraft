import React, { Component, PropTypes } from 'react'
import { MDBCol, MDBInput, MDBBtn } from "mdbreact"

export class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      passwordCheck: '',
      email:'',
      pwdDiff: true,
      submitDisabled: true,
      emailValid: false,
    }
  }


  handleSubmit = event => {
    event.preventDefault()
    const { username, password, email } = this.state
    this.props.fetchSignup(username, password, email)
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
    //FIXME : Fancy way?
    //Password valid check -> enable submit
    if (event.target.name != 'username' && event.target.name != 'email') {
      let passwordIsValid = (event.target.value == this.state.password)
                              || (event.target.value == this.state.passwordCheck)
      if(!passwordIsValid) {
        this.setState({ pwdDiff: true, submitDisabled: true })
      } else {
        this.setState({ pwdDiff: false })
      }

      if(passwordIsValid && this.state.username != '' && this.state.emailValid) {
        this.setState({ submitDisabled: false })
      }
    }

    //Username valid check -> enable submit
    if(event.target.name == 'username') {
      if((this.state.password != '') && (event.target.value != '') && (this.state.password == this.state.passwordCheck) && this.state.emailValid){
        this.setState({ submitDisabled: false })
      } else {
        this.setState({ submitDisabled: true })
      }
    }

    //FIXME
    //Refactoring needed
    if(event.target.name == 'email') {
      if((this.state.password != '') && (this.state.password == this.state.passwordCheck) && this.state.username != '' && this.state.emailValid){
        this.setState({ submitDisabled: false })
      } else {
        this.setState({ submitDisabled: true })
      }

      if(value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
         this.setState({ emailValid: true })
         if((this.state.password != '') && (this.state.password == this.state.passwordCheck) && this.state.username != '' ){
           this.setState({ submitDisabled: false })
         }
       } else{
         this.setState({ emailValid: false })
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
              </MDBInput>
              <MDBInput
                label="Email address"
                className={this.state.emailValid ? "is-valid" : "is-invalid" }
                icon="envelope"
                group
                type="email"
                name="email"
                value={this.state.email}
                onInput={this.handleInputChange}
              />
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
