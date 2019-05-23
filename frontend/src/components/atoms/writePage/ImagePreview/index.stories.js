import React from 'react'
import { storiesOf } from '@kadira/storybook'
import ImagePreview from '.'

storiesOf('ImagePreview', module)
  .add('default', () => (
    <ImagePreview>Hello</ImagePreview>
  ))
  .add('reverse', () => (
    <ImagePreview reverse>Hello</ImagePreview>
  ))
