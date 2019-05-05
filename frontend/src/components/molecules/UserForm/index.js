import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import LoginForm from "containers/LoginForm";
import LogoutButton from "containers/LogoutButton";
import PopSignup from "containers/PopSignup"

export const UserForm = props => {
  return (
      <div>
        {props.isLoggedIn ? <LogoutButton user={props.user}/> :
        <div className="container-fluid">
          <form className="form-inline my-1">
            <LoginForm/>
            <PopSignup/>
          </form>
        </div>
        }
      </div>
  )
}
