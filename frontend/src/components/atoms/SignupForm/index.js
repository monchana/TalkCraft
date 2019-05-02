import React, { Component, PropTypes } from 'react'

export class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      hidden: true,
    }

    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
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
  }

  render() {
    return (
      <div>

          <input
              type='text'
              name='username'
              placeholder='username'
              onChange={this.handleInputChange}
          />
          <input
              type= {this.state.hidden ? 'password':'text'}
              name='password'
              placeholder='password'
              value = {this.state.password}
              onChange={this.handleInputChange}
          />
          <button onClick={this.toggleShow}>
            {this.state.hidden ? 'Show password': 'Hide password'}
          </button>
          <button type='submit' onClick={this.handleSubmit}>SignUp</button>

      </div>
    )
  }
}

SignupForm.propTypes = {
  fetchLogin: PropTypes.func,
  reverse: PropTypes.bool,
}
