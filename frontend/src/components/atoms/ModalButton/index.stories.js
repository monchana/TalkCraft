import React from 'react'
import { storiesOf } from '@kadira/storybook'
import ModalButton from '.'

storiesOf('ModalButton', module)
  .add('default', () => (
    <ModalButton>Hello</ModalButton>
  ))
  .add('reverse', () => (
    <ModalButton reverse>Hello</ModalButton>
  ))
