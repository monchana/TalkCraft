import React from 'react'
import { storiesOf } from '@kadira/storybook'
import PicB from '.'

storiesOf('PicB', module)
  .add('default', () => (
    <PicB>Hello</PicB>
  ))
  .add('reverse', () => (
    <PicB reverse>Hello</PicB>
  ))
