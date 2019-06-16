// https://github.com/diegohaz/arc/wiki/Atomic-Design
//after finishing debate backend and popup pages should update this part

import React from 'react'
import {
  PageTemplate, Header, PrimaryNavigation, Footer, DebateVeiw
} from 'components'
// import { NavigationBar } from 'components'

import NavigationBar from '../../../containers/NavigationBar'


const DebateDetailPage = () => {
  return (
    <PageTemplate
      header={<NavigationBar />}
      footer={<Footer />}
    >

      <DebateView />
      <div class="col-md-4">
        <Button variant="Debate Now" type="button" class="btn btn-default btn-lg" onClick="location.href= '/debate_start_popup_url' "> Debate Now </Button>
      </div>

    </PageTemplate>
  )
}

export default DebateDetailPage
