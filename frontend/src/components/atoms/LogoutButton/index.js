import React, { Component, PropTypes } from 'react'

export const LogoutButton = props => {
  const handleSubmit = event => {
    event.preventDefault()
    props.logout()
  }

  return (
      <div>
        <h4>{props.user.username}
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={handleSubmit}>
          LOGOUT
        </button>
        </h4>
      </div>
  )
}
