// https://github.com/diegohaz/arc/wiki/Atomic-Design

import React, { Component } from 'react'
import {
  PageTemplate, Header, PrimaryNavigation, Footer, ProfileArea
} from 'components'
// import { NavigationBar } from 'components'

import NavigationBar from './NavigationBar'


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

          name={name}
          username={username}
          email={email}
          userImg={userImg} //????should impleamet random avatar
          age={age}
          joined={joined}
          aboutMe={aboutME}
        //yesornolist="yesorno list"  How??
        //debatelist="debatelist" ?????
        />
      </PageTemplate>
    )
  }
}
ProfilePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  pageState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    pageState: state
  }
}

export default ProfilePage
