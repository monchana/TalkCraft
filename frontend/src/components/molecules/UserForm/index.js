import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import LoginForm from "containers/LoginForm";
import LogoutButton from "containers/LogoutButton";
import PopSignup from "containers/PopSignup"

export const UserForm = props => {
  return (
      <div>
        {props.isLoggedIn ? <LogoutButton user={props.user}/> :
            <div>
            <LoginForm/>
            <PopSignup/>
            </div>
        }
      </div>
  )
}

UserForm.propTypes = {
  isLoggedIn: PropTypes.bool,
  user: PropTypes.object,
  reverse: PropTypes.bool,
  children: PropTypes.node,
}
