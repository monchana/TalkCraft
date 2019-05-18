import React from 'react'
import { storiesOf } from '@storybook/react'
import { UserForm } from 'components'

storiesOf('UserForm', module)
  .add('default', () => (
    <UserForm>Hello</UserForm>
  ))
  .add('reverse', () => (
    <UserForm reverse>Hello</UserForm>
  ))
