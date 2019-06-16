// https://github.com/diegohaz/arc/wiki/Atomic-Design
// import React from 'react'
//
// const YesNoDetailPage = () => {
//   return (
//     <div>Hello World</div>
//   )
// }
//
// export default YesNoDetailPage


// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import {
  PageTemplate, Header, MainCarousel, MainListGroup, Footer
} from 'components'
// import { NavigationBar } from 'components'

import  NavigationBar   from '../../../containers/NavigationBar'



const YesNoDetailPage = () => {
  return (
    <PageTemplate
      header={<NavigationBar/>}
      footer={<Footer />}
    >
      Yes or No Detail Page
    </PageTemplate>
  )
}

export default YesNoDetailPage
