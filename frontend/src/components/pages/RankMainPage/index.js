// https://github.com/diegohaz/arc/wiki/Atomic-Design
// import React from 'react'
//
// const RankMainPage = () => {
//   return (
//     <div>Hello World</div>
//   )
// }
//
// export default RankMainPage


// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import {
  PageTemplate, Header, PrimaryNavigation, Footer 
} from 'components'
// import { NavigationBar } from 'components'

import  NavigationBar   from '../../../containers/NavigationBar'


const RankMainPage = () => {
  return (
    <PageTemplate
      header={<NavigationBar/>}
      footer={<Footer />}
    >
      Rank Main Page
    </PageTemplate>
  )
}

export default RankMainPage
