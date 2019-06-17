import React from 'react'
import {
  PageTemplate, Header, MainCarousel, MainListGroup, Footer
} from 'components'
// import { NavigationBar } from 'components'

import  NavigationBar   from '../../../containers/NavigationBar'

import { Input } from 'components'
import { YesNoRegisterForm } from 'containers'
const YesNoWritePage = () => {
  return (
    <PageTemplate
      header={<NavigationBar/>}
      footer={<Footer />}
    >
      <YesNoRegisterForm/>
    </PageTemplate>
  )
}

export default YesNoWritePage
