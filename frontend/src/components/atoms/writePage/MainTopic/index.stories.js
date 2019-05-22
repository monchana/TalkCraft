import React from 'react'
import { storiesOf } from '@kadira/storybook'
import MainTopic from '.'

storiesOf('MainTopic', module)
  .add('default', () => (
    <MainTopic>Hello</MainTopic>
  ))
  .add('reverse', () => (
    <MainTopic reverse>Hello</MainTopic>
  ))
