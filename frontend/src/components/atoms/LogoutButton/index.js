import React, { Component, PropTypes } from 'react'
import { Icon, Link } from 'components'
import { MDBBtn } from 'mdbreact'

//FIXME
export const LogoutButton = props => {
  const handleSubmit = event => {
    event.preventDefault()
    props.logout()
  }

  return (
      <div className="d-flex justify-content-end">
        <h5 className="my-auto" style={{marginRight: "10px"}}>
        <Link href={"/users/" + props.user.username} >
        <Icon icon="heart" />
        {' '}
        {props.user.username}
        {' '}
        </Link>
        </h5>
        <button
          className="btn btn-link"
          style={{marginTop: "14px"}}
          onClick={handleSubmit}
          >
          Log Out
        </button>
      </div>
  )
}
