// https://github.com/diegohaz/arc/wiki/Atomic-Design
// import React from 'react'
//
// const DebateDetailPage = () => {
//   return (
//     <div>Hello World</div>
//   )
// }
//
// export default DebateDetailPage


// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import {
  PageTemplate, Header, MainCarousel, MainListGroup, Footer , DebateVeiw
} from 'components'
// import { NavigationBar } from 'components'

import  NavigationBar   from '../../../containers/NavigationBar'

const DebateDetailPage = () => {
  return (
    <PageTemplate
      header={<NavigationBar/>}
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
