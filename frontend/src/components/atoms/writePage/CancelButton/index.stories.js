import React from 'react'
import { storiesOf } from '@kadira/storybook'
import CancelButton from '.'

storiesOf('CancelButton', module)
  .add('default', () => (
    <CancelButton>Hello</CancelButton>
  ))
  .add('reverse', () => (
    <CancelButton reverse>Hello</CancelButton>
  ))
  .add('another palette', () => (
    <CancelButton palette="secondary">Hello</CancelButton>
  ))
  .add('disabled', () => (
    <CancelButton disabled>Hello</CancelButton>
  ))
  .add('transparent', () => (
    <CancelButton transparent>Hello</CancelButton>
  ))
  .add('height', () => (
    <CancelButton height={100}>Hello</CancelButton>
  ))
  .add('link', () => (
    <CancelButton href="https://github.com/diegohaz/arc">ARc repository</CancelButton>
  ))
