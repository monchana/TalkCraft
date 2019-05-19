import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import React, { Component } from 'react'
import { Nav, Tab, Col, Row , Tabs} from 'react-bootstrap'

import SignupForm from "containers/SignupForm"
import LoginForm from "containers/LoginForm"

class ControlledTabs extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 'signin'
    };
  }
  render() {
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={this.state.key}
        onSelect={key => this.setState({ key })}
        className="flex-row nav-justified"
        variant="pills"
      >
        <Tab eventKey="signin" title="Sign In">
          <LoginForm/>
        </Tab>
        <Tab eventKey="signup" title="Sign Up">
          <SignupForm
          />
        </Tab>
      </Tabs>

    );
  }
}

export default ControlledTabs
