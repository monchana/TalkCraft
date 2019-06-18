// https://github.com/diegohaz/arc/wiki/Atomic-Design
// import React from 'react'
//
// const DebateMainPage = () => {
//   return (
//     <div>Hello World</div>
//   )
// }
//
// export default DebateMainPage


// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import {
  PageTemplate, Header, PrimaryNavigation, Footer, DebateList
} from 'components'
// import { NavigationBar } from 'components'

import  NavigationBar   from '../../../containers/NavigationBar'


const DebateMainPage = () => {
  return (
    <PageTemplate
      header={<NavigationBar/>}
      footer={<Footer />}
    >
      <DebateList/>
    </PageTemplate>
  )
}

export default DebateMainPage
