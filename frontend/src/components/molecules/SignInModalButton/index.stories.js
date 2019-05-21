import React from 'react'
import { storiesOf } from '@storybook/react'
import { SignInModalButton } from 'components'

storiesOf('SingInModalButton', module)
  .add('default', () => (
    <SignInModalButton>Hello</SignInModalButton>
  ))
  .add('reverse', () => (
    <SignInModalButton reverse>Hello</SignInModalButton>
  ))
