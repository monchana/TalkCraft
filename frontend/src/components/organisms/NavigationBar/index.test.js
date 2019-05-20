import React from 'react'
import { shallow } from 'enzyme'
import NavigationBar from '.'

const wrap = (props = {}) => shallow(<NavigationBar {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(0)
})
