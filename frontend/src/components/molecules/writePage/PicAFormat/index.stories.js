import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { PicAFormat } from 'components'

storiesOf('PicAFormat', module)
  .add('default', () => (
    <PicAFormat>Hello</PicAFormat>
  ))
  .add('reverse', () => (
    <PicAFormat reverse>Hello</PicAFormat>
  ))
