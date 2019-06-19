// https://github.com/diegohaz/arc/wiki/Atomic-Design

import React, { Component } from 'react'
import {
  PageTemplate, Header, PrimaryNavigation, Footer, ProfileArea
} from 'components'
// import { NavigationBar } from 'components'

import NavigationBar from './NavigationBar'


class MyPage extends React.Component {
  constructor() {
    super()
    this.state = {
      username: null
    }
  }
  componentDidMount() {
    const { match: { params } } = this.props;
    this.setState({ username: params.userId })
  }
  render() {
    /*const {

      username = '',

      email = '',

      userImg = '',

      age = '',

      joined = '',

      aboutMe = ''

    } = this.props.pageState.profile;*/

    return (
      <PageTemplate
        header={<NavigationBar />}
        footer={<Footer />}
      >
        <ProfileArea

          username={this.state.username}
          //Email="default" It is going to be anonymous users so no need for email and age
          userImg="img"
          //age="20"
          //joined="2019/06/01"
          myrank=" Golden (35)"
          LittleAboutMe="I am studying in SNU"
          yesornolist="yesorno list"
          debatelist="debatelist"
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

export default MyPage
