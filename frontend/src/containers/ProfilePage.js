// https://github.com/diegohaz/arc/wiki/Atomic-Design

import React, { Component } from 'react'
import {
  PageTemplate, Header, PrimaryNavigation, Footer, ProfileArea
} from 'components'
// import { NavigationBar } from 'components'

import NavigationBar from './NavigationBar'


class MyPage extends React.Component {
  componentDidMount() {
    const userId = this.props.pageState.auth.id;
  }
 render() {
    /*const {

      username = '',

      email = ''

    } = this.props.pageState.profile;
*/
    return (
      <PageTemplate
        header={<NavigationBar />}
        footer={<Footer />}
      >
        <ProfileArea
          
          name="Maryam"
          username="mary"
          userImg="img"
          age="20"
          joined="2019/06/01"
          LittleAboutMe="I am studying in SNU"
          yesornolist="yesorno list"
          debatelist="debatelist"
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

export default MyPage
