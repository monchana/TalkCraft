import React from 'react'
import { storiesOf } from '@kadira/storybook'
import TextB from '.'

storiesOf('TextB', module)
  .add('default', () => (
    <TextB>Hello</TextB>
  ))
  .add('reverse', () => (
    <TextB reverse>Hello</TextB>
  ))
