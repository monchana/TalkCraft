import React from 'react'
import { storiesOf } from '@kadira/storybook'
import WordLimit from '.'

storiesOf('WordLimit', module)
  .add('default', () => (
    <WordLimit>Hello</WordLimit>
  ))
  .add('reverse', () => (
    <WordLimit reverse>Hello</WordLimit>
  ))
