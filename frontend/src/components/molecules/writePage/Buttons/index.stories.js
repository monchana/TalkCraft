import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Buttons } from 'components'

storiesOf('Buttons', module)
  .add('default', () => (
    <Buttons>Hello</Buttons>
  ))
  .add('reverse', () => (
    <Buttons reverse>Hello</Buttons>
  ))
