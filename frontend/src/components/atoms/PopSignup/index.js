import React, { Component, PropTypes } from 'react'
import Modal from 'react-modal';
import ModalButton from '../../../components/atoms/ModalButton';
import SignupForm from "containers/SignupForm"

export class PopSignup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpened: false
    }
  }

  handleModal = event => {
    event.preventDefault()
    this.setState(prevState => ({ modalOpened: !prevState.modalOpened }))
    const { modalOpened } = this.state
    this.props.toggleModal(modalOpened)
  }

  render() {
    return (
      <div>
        <ModalButton handleClick={this.handleModal}>
          sign up
        </ModalButton>
        <Modal
          isOpen={this.state.modalOpened}
          onRequestClose={this.handleModal}
          contentLabel="Modal with SignUp Form"
        >
        <SignupForm/>
        <button onClick = {this.handleModal}> Close </button>
        </Modal>
      </div>
    )
  }
}


PopSignup.propTypes = {
  toggleModal: PropTypes.func,
  reverse: PropTypes.bool,
}
