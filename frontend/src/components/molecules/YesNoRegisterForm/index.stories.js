import React from 'react'
import { storiesOf } from '@storybook/react'
import YesNoRegisterForm from '.'

storiesOf('YesNoRegisterForm', module)
  .add('default', () => (
    <YesNoRegisterForm>Hello</YesNoRegisterForm>
  ))
  .add('reverse', () => (
    <YesNoRegisterForm reverse>Hello</YesNoRegisterForm>
  ))
