import React from 'react'
import LoginForm from "containers/LoginForm";
import LogoutButton from "containers/LogoutButton";

export const UserForm = props => {
  return (
      <div>
        {props.isLoggedIn ? <LogoutButton user={props.user}/> :
        <div className="container-fluid">
          <form className="form-inline my-1">
            <LoginForm/>

          </form>
        </div>
        }
      </div>
  )
}
