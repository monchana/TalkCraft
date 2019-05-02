import React from 'react'
import { storiesOf } from '@kadira/storybook'
import PopSignup from '.'

storiesOf('PopSignup', module)
  .add('default', () => (
    <PopSignup>Hello</PopSignup>
  ))
  .add('reverse', () => (
    <PopSignup reverse>Hello</PopSignup>
  ))
