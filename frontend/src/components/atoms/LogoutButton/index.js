import React, { Component, PropTypes } from 'react'
import { Icon } from 'components'
import { MDBBtn } from 'mdbreact'

export const LogoutButton = props => {
  const handleSubmit = event => {
    event.preventDefault()
    props.logout()
  }

  return (
      <div className="d-flex justify-content-end">
        <h5 className="my-auto" style={{marginRight: "10px"}}>
        <Icon icon="heart" />
        {' '}
        {props.user.username}
        {' '}
        </h5>
        <button
          className="btn btn-link"
          style={{marginTop: "14px"}}
          onClick={handleSubmit}>
          Log Out
        </button>
      </div>
  )
}
