// https://github.com/diegohaz/arc/wiki/Testing-components
import React from 'react'
import { shallow } from 'enzyme'
import YesNoDetailPage from '.'

it('renders', () => {
  shallow(<YesNoDetailPage />)
})
