import React from 'react'
import { storiesOf } from '@kadira/storybook'
import FindPicA from '.'

storiesOf('FindPicA', module)
  .add('default', () => (
    <FindPicA>Hello</FindPicA>
  ))
  .add('reverse', () => (
    <FindPicA reverse>Hello</FindPicA>
  ))
  .add('another palette', () => (
    <FindPicA palette="secondary">Hello</FindPicA>
  ))
  .add('disabled', () => (
    <FindPicA disabled>Hello</FindPicA>
  ))
  .add('transparent', () => (
    <FindPicA transparent>Hello</FindPicA>
  ))
  .add('height', () => (
    <FindPicA height={100}>Hello</FindPicA>
  ))
  .add('link', () => (
    <FindPicA href="https://github.com/diegohaz/arc">ARc repository</FindPicA>
  ))
