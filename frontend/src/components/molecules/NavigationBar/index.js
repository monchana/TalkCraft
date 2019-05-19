import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Icon, SignInModalButton  } from 'components'
import { UserForm } from 'containers'
import { Navbar, Nav } from 'react-bootstrap'

//reference
// const Nav = styled.nav`
//   display: flex;
//   list-style: none;
//   > :not(:first-child) {
//     margin-left: 1rem;
//   }
//   a {
//     font-weight: 300;
//     color: ${palette('grayscale', 2)};
//     font-size: 1.25rem;
//     &.active {
//       color: ${palette('grayscale', 0)};
//     }
//   }
// `

const NavigationBar = (props) => {
  const handleSignIn = event => {
    event.preventDefault()
    props.openSignUp()
  }


  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand href="/">
        <Icon icon="react" />
        {' '}
        {' Talk Craft'}
        {' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-center d-flex flex-fill">
          <Nav.Link href="/"> Yes/No</Nav.Link>
          <Nav.Link href="/"> Debate</Nav.Link>
          <Nav.Link href="/"> Rank</Nav.Link>
        </Nav>
        <SignInModalButton/>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
