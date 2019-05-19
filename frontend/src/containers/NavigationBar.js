import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavigationBar } from 'components'
import { connect } from 'react-redux'
import * as actions from 'store/actions'

class NavigationBarContainer extends Component {


  render() {

    return (
      <NavigationBar
      />
    )
  }


}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBarContainer)
