import React from 'react'
import { storiesOf } from '@storybook/react'
import { DebateList } from 'components'

storiesOf('DebateList', module)
  .add('default', () => (
    <DebateList>Hello</DebateList>
  ))
  .add('reverse', () => (
    <DebateList reverse>Hello</DebateList>
  ))
