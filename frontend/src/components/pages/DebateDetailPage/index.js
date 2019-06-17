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
  PageTemplate, Header, MainCarousel, MainListGroup, Footer
} from 'components'
// import { NavigationBar } from 'components'

import  NavigationBar   from '../../../containers/NavigationBar'

const DebateDetailPage = () => {
  return (
    <PageTemplate
      header={<NavigationBar/>}
      footer={<Footer />}
    >
      Debate Detail Page
    </PageTemplate>
  )
}

export default DebateDetailPage
