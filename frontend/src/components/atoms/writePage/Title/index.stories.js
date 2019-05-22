import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Title from '.'

storiesOf('Title', module)
  .add('default', () => (
    <Title>Hello</Title>
  ))
  .add('reverse', () => (
    <Title reverse>Hello</Title>
  ))
