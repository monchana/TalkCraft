import React from 'react'
import { storiesOf } from '@kadira/storybook'
import PicA from '.'

storiesOf('PicA', module)
  .add('default', () => (
    <PicA>Hello</PicA>
  ))
  .add('reverse', () => (
    <PicA reverse>Hello</PicA>
  ))
