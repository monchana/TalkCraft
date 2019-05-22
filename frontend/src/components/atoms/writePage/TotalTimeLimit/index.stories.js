import React from 'react'
import { storiesOf } from '@kadira/storybook'
import TotalTimeLimit from '.'

storiesOf('TotalTimeLimit', module)
  .add('default', () => (
    <TotalTimeLimit>Hello</TotalTimeLimit>
  ))
  .add('reverse', () => (
    <TotalTimeLimit reverse>Hello</TotalTimeLimit>
  ))
