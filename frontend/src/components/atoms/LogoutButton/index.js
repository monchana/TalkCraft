import React, { Component, PropTypes } from 'react'

export const LogoutButton = props => {
  const handleSubmit = event => {
    event.preventDefault()
    props.logout()
  }

  return (
      <div>
        {props.user.username}
        <button onClick={handleSubmit}>LOGOUT</button>
      </div>
  )
}

LogoutButton.propTypes = {
  logout: PropTypes.func,
  user: PropTypes.object,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}
