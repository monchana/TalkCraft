import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from '.'

storiesOf('Input', module)
  .add('default', () => (
    <Input>Hello</Input>
  ))
  .add('reverse', () => (
    <Input reverse>Hello</Input>
  ))
  .add('another palette', () => (
    <Input palette="secondary">Hello</Input>
  ))
  .add('disabled', () => (
    <Input disabled>Hello</Input>
  ))
  .add('transparent', () => (
    <Input transparent>Hello</Input>
  ))
  .add('height', () => (
    <Input height={100}>Hello</Input>
  ))
  .add('link', () => (
    <Input href="https://github.com/diegohaz/arc">ARc repository</Input>
  ))
