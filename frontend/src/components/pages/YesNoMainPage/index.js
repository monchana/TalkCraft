// https://github.com/diegohaz/arc/wiki/Atomic-Design
// import React from 'react'
//
// const YesNoMainPage = () => {
//   return (
//     <div>Hello World</div>
//   )
// }
//
// export default YesNoMainPage


// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import {
  PageTemplate, Header, PrimaryNavigation, Footer, 
} from 'components'
// import { NavigationBar } from 'components'

import  NavigationBar   from '../../../containers/NavigationBar'


const YesNoMainPage = () => {
  return (
    <PageTemplate
      header={<NavigationBar/>}
      footer={<Footer />}
    >
      Yes or No Main Page
    </PageTemplate>
  )
}

export default YesNoMainPage
