import React from 'react'
import { storiesOf } from '@kadira/storybook'
import FindPicB from '.'

storiesOf('FindPicB', module)
  .add('default', () => (
    <FindPicB>Hello</FindPicB>
  ))
  .add('reverse', () => (
    <FindPicB reverse>Hello</FindPicB>
  ))
  .add('another palette', () => (
    <FindPicB palette="secondary">Hello</FindPicB>
  ))
  .add('disabled', () => (
    <FindPicB disabled>Hello</FindPicB>
  ))
  .add('transparent', () => (
    <FindPicB transparent>Hello</FindPicB>
  ))
  .add('height', () => (
    <FindPicB height={100}>Hello</FindPicB>
  ))
  .add('link', () => (
    <FindPicB href="https://github.com/diegohaz/arc">ARc repository</FindPicB>
  ))
