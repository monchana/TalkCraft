import React from 'react'
import { storiesOf } from '@storybook/react'
import { MainListGroup } from 'components'

storiesOf('MainListGroup', module)
  .add('default', () => (
    <MainListGroup>Hello</MainListGroup>
  ))
  .add('reverse', () => (
    <MainListGroup reverse>Hello</MainListGroup>
  ))
