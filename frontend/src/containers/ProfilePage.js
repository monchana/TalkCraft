// https://github.com/diegohaz/arc/wiki/Atomic-Design

import React, { Component } from 'react'
import {
  PageTemplate, Header, PrimaryNavigation, Footer, ProfileArea
} from 'components'
// import { NavigationBar } from 'components'

import NavigationBar from './NavigationBar'


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
      username: null
    }
  }
 componentDidMount(){
   const { match: { params } } = this.props;
   this.setState({username: params.userId })
 }
 render() {
    /*const {
>>>>>>> 2135607e0246f0ec6892ab5725e072c419d14ebe

      username = '',

      email = '',

      userImg = '',

      age = '',

      joined = '',

      aboutMe = ''

    } = this.props.pageState.profile;

    return (
      <PageTemplate
        header={<NavigationBar />}
        footer={<Footer />}
      >
        <ProfileArea

<<<<<<< HEAD
          name={name}
          username={username}
          email={email}
          userImg={userImg} //????should impleamet random avatar
          age={age}
          joined={joined}
          aboutMe={aboutME}
        //yesornolist="yesorno list"  How??
        //debatelist="debatelist" ?????
=======
          name={this.state.username}
          username="mary"
          Email= "default"
          userImg="img"
          age="20"
          joined="2019/06/01"
          LittleAboutMe="I am studying in SNU"
          yesornolist="yesorno list"
          debatelist="debatelist"
>>>>>>> 2135607e0246f0ec6892ab5725e072c419d14ebe
        />
      </PageTemplate>
    )
  }
}

function mapStateToProps(state) {
  return {
    pageState: state
  }
}

export default ProfilePage
