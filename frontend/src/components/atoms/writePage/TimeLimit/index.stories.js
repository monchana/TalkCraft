import React from 'react'
import { storiesOf } from '@kadira/storybook'
import TimeLimit from '.'

storiesOf('TimeLimit', module)
  .add('default', () => (
    <TimeLimit>Hello</TimeLimit>
  ))
  .add('reverse', () => (
    <TimeLimit reverse>Hello</TimeLimit>
  ))
