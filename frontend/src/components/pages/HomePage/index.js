// https://github.com/diegohaz/arc/wiki/Atomic-Design
// import React from 'react'
//
// const HomePage = () => {
//   return (
//     <div>Hello World</div>
//   )
// }
//
// export default HomePage


// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import {
  PageTemplate, Header, MainCarousel, MainListGroup, Footer
} from 'components'
// import { NavigationBar } from 'components'

import  NavigationBar   from '../../../containers/NavigationBar'



const HomePage = () => {
  return (
    <PageTemplate
      header={<NavigationBar/>}
      footer={<Footer />}
    >
      <MainCarousel/>
    </PageTemplate>
  )
}

export default HomePage
