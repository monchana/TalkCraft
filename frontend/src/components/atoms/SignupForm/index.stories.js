import React from 'react'
import { storiesOf } from '@storybook/react'
import SignupForm from '.'

storiesOf('SignupForm', module)
  .add('default', () => (
    <SignupForm>Hello</SignupForm>
  ))
  .add('reverse', () => (
    <SignupForm reverse>Hello</SignupForm>
  ))
