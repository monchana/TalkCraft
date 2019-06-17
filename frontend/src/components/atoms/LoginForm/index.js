import React, { Component, PropTypes } from 'react'
import { MDBBtn, MDBInput } from "mdbreact";

export class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const { username, password } = this.state
    this.props.fetchLogin(username, password)
  }

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
           onKeyPress={this.handleKeyPress}
         />
         <MDBInput
           label="Password"
           icon="lock"
           group
           type="password"
           validate
           error="wrong"
           success="right"
           name="password"
           value={this.state.password}
           onInput={this.handleInputChange}
           onKeyPress={this.handleKeyPress}
           required
         />
       </div>
       <div>
           <MDBBtn
            className="text-center"
            style={{display:"block", margin:"auto"}}
            type="button"
            color="cyan"
            onClick={this.handleSubmit}>
            Sign In
          </MDBBtn>
      </div>
     </div>
    )
  }
}
