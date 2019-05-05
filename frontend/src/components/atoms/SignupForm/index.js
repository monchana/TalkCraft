import React, { Component, PropTypes } from 'react'

export class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      passwordCheck: '',
      hidden: true,
      pwdDiff: false,
      submitDisabled: true,
    }

    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
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
      <form>
        <div className="modal-body mx-3">
          <div className="md-form mb-3">
            <i className="fas fa-user prefix grey-text"></i>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                className="form-control validate"
                id="username"
                name="username"
                placeholder="username"
                onChange={this.handleInputChange}
            />
          </div>
          <div className="md-form mb-3">
            <i className="fas fa-user prefix grey-text"></i>
            <label htmlFor="password">Password</label>
              <input
                  type= {this.state.hidden ? "password":"text"}
                  className={this.state.pwdDiff ? "form-control is-invalid" : "form-control"}
                  id="password"
                  name="password"
                  placeholder="password"
                  value = {this.state.password}
                  onChange={this.handleInputChange}
              />
            </div>
            <div className="md-form mb-3">
              <i className="fas fa-user prefix grey-text"></i>
              <label htmlFor="passwordCheck">Confirm Password</label>
              <input
                  type= {this.state.hidden ? "password":"text"}
                  className={this.state.pwdDiff ? "form-control is-invalid" : "form-control"}
                  id="passwordCheck"
                  name="passwordCheck"
                  placeholder="check password"
                  value = {this.state.passwordCheck}
                  onChange={this.handleInputChange}
              />
              <div className="invalid-feedback">
                Password is different
              </div>
            </div>
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-secondary" onClick={this.toggleShow}>
              {this.state.hidden ? "Show password": "Hide password"}
            </button>
          </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleSubmit}
              disabled={this.state.submitDisabled}
            >
            Sign Up
            </button>
      </form>
    )
  }
}

SignupForm.propTypes = {
  fetchLogin: PropTypes.func,
  reverse: PropTypes.bool,
}
