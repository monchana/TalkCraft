import React, { Component } from "react"
// import for modal
import { Modal, ButtonToolbar, Button } from "react-bootstrap"
import { Link } from "components"
// import for Modal body
import  { ControlledTabs } from "components"
import { initialState } from "../../../store/navigationbar/selectors"
import { LogoutButton } from "containers"


class SignInModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <ControlledTabs/>
        </Modal.Body>
      </Modal>
    );
  }
}

class SignInModalButton extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      modalShow: false,
      isLoggedIn: initialState.isLoggedIn,
      user: initialState.user
    };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });
    let signinButtonUI = (this.state.isLoggedIn) ? <LogoutButton user={this.state.user}/>
               : <ButtonToolbar>

                 <Button
                   variant="btn btn-link"
                   onClick={() => this.setState({ modalShow: true })}
                 >
                   Sign In
                 </Button>

                 <SignInModal
                   show={this.state.modalShow}
                   onHide={modalClose}
                 />

               </ButtonToolbar>
    return (
      signinButtonUI
    );
  }
}

export default SignInModalButton
