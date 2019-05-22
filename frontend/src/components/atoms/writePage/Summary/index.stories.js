import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Summary from '.'

storiesOf('Summary', module)
  .add('default', () => (
    <Summary>Hello</Summary>
  ))
  .add('reverse', () => (
    <Summary reverse>Hello</Summary>
  ))
