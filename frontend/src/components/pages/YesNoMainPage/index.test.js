// https://github.com/diegohaz/arc/wiki/Testing-components
import React from 'react'
import { shallow } from 'enzyme'
import YesNoMainPage from '.'

it('renders', () => {
  shallow(<YesNoMainPage />)
})
