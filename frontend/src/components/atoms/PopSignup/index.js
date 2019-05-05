import React, { Component, PropTypes } from 'react'
import SignupForm from "containers/SignupForm"
import { MDBBtn } from "mdbreact";


class SignupModal extends Component {
  componentDidMount() {

  }

  dismissModal = ()=>{
    this.props.toggle()
  }

  render() {
    return (
      <div
        className={`modal fade signupModal ${this.props.showModal ? 'show' : ''}`}
        style={{
              display: `${this.props.showModal ? 'block' : 'none'}`,
            }}
        id="signupModal" tabIndex="-1" role="dialog" aria-labelledby="singupModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
        <div className="modal-header text-center">
                    <h5 className="modal-title w-100 font-weight-bold" id="signupModalLabel">Sign Up</h5>
                    <button type="button" className="close" onClick={this.dismissModal} data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
          <div className="modal-body">
            <SignupForm/>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export class PopSignup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpened: false
    }
  }

  toggleModal = () => this.setState({
                 modalOpened: !this.state.modalOpened
  })

  render() {
    return (
      <div>
          <MDBBtn
            color="primary"
            size="sm"
            onClick={
              this.toggleModal
            }
            data-toggle="modal"
            data-target="#signupModal"
            >Sign Up
          </MDBBtn>
          <SignupModal
           toggle = {this.toggleModal}
           showModal={this.state.modalOpened}
          />
      </div>
    )
  }
}
