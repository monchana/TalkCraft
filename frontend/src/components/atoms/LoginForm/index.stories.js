import React from 'react'
import { storiesOf } from '@storybook/react'
import LoginForm from '.'

storiesOf('LoginForm', module)
  .add('default', () => (
    <LoginForm>Hello</LoginForm>
  ))
  .add('reverse', () => (
    <LoginForm reverse>Hello</LoginForm>
  ))
