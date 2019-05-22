import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { PicBFormat } from 'components'

storiesOf('PicBFormat', module)
  .add('default', () => (
    <PicBFormat>Hello</PicBFormat>
  ))
  .add('reverse', () => (
    <PicBFormat reverse>Hello</PicBFormat>
  ))
