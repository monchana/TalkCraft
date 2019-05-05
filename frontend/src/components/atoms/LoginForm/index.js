import React, { Component, PropTypes } from 'react'

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

  render() {
    return (
      <div>
          <input
              type="text"
              name="username"
              placeholder="username"
              onChange={this.handleInputChange}
          />
          <input
              type="password"
              name="password"
              placeholder="password"
              onChange={this.handleInputChange}
          />
          <button
             type="button"
             className="btn btn-link btn-sm"
             onClick={this.handleSubmit}
             >
             LOGIN
         </button>
      </div>
    )
  }
}

LoginForm.propTypes = {
  fetchLogin: PropTypes.func,
  reverse: PropTypes.bool,
}
