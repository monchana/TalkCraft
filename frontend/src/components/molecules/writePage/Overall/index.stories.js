import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Overall } from 'components'

storiesOf('Overall', module)
  .add('default', () => (
    <Overall>Hello</Overall>
  ))
  .add('reverse', () => (
    <Overall reverse>Hello</Overall>
  ))
