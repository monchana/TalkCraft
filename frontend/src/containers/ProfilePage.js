// https://github.com/diegohaz/arc/wiki/Atomic-Design

import React, { Component } from 'react'
import {
  PageTemplate, Header, PrimaryNavigation, Footer, ProfileArea
} from 'components'
// import { NavigationBar } from 'components'

import NavigationBar from './NavigationBar'

import { Spinner } from 'react-bootstrap'

<<<<<<< HEAD
class ProfilePage extends React.Component {
  componentDidMount() {

    this.props.dispatch({

      type: types.PROFILE__REQUESTED,

      payload: {

        userId: this.props.pageState.auth.id

      }

    });

  }
  render() {
    const {

      name = '',
=======
class MyPage extends React.Component {
  constructor(){
    super()
    this.state = {
      username: null,
      yesnoList: null,
      loading: true
    }
  }
 componentDidMount(){
   const { match: { params } } = this.props;
   this.setState({username: params.userId })

   fetch('http://localhost:8000/yesorno/write/')
   .then(response => response.json())
   .then(data => this.setState({ yesnoList: data, loading: false }))
 }
 render() {
    /*const {

      username = '',

      email = ''

    } = this.props.pageState.profile;
*/
    let yesnoList = (this.state.loading) ? []
    :
    this.state.yesnoList.filter(data => data.author == this.state.username)
    let myPageUI = (this.state.loading)
    ?
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
    :
    <PageTemplate
      header={<NavigationBar />}
      footer={<Footer />}
    >
      <ProfileArea
        name={this.state.username}
        username="mary"
        Email= "default"
        userImg="img"
        age="20"
        joined="2019/06/01"
        LittleAboutMe="I am studying in SNU"
        yesornolist="yesorno list"
        debatelist="debatelist"
      />
    </PageTemplate>
    return (
      myPageUI
    )
  }
}

function mapStateToProps(state) {
  return {
    pageState: state
  }
}

export default ProfilePage
