

import React from 'react'
import {
  PageTemplate, Header, PrimaryNavigation, Footer
} from 'components'
// import { NavigationBar } from 'components'

import  NavigationBar   from '../../../containers/NavigationBar'


const YesOrNoWritePage = () => {
  return (
    <PageTemplate
      header={<NavigationBar/>}
      footer={<Footer />}
    >
      Yes or No Main Page
    </PageTemplate>
  )
}

export default YesOrNoWritePage
