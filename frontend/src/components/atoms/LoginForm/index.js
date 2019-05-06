import React, { Component, PropTypes } from 'react'
import { MDBBtn } from "mdbreact";

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
    <div className="form-inline my-0">
      <div className="md-form form-sm my-0">
          <input
              className="form-control form-control-sm mr-sm-2 mb-0"
              type="text"
              name="username"
              placeholder="username"
              onChange={this.handleInputChange}
              onKeyPress={this.handleKeyPress}
          />
          <input
              className="form-control form-control-sm mr-sm-2 mb-0"
              type="password"
              name="password"
              placeholder="password"
              onChange={this.handleInputChange}
              onKeyPress={this.handleKeyPress}
          />
       </div>
       <div>
          <MDBBtn
             outline color="primary"
             size="sm"
             onClick={this.handleSubmit}
             >
             LOGIN
         </MDBBtn>
      </div>
     </div>
    )
  }
}
