import React from 'react'
import { storiesOf } from '@kadira/storybook'
import TextA from '.'

storiesOf('TextA', module)
  .add('default', () => (
    <TextA>Hello</TextA>
  ))
  .add('reverse', () => (
    <TextA reverse>Hello</TextA>
  ))
