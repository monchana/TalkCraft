import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WritePage } from 'components'

storiesOf('WritePage', module)
  .add('default', () => (
    <WritePage />
  ))
  .add('reverse', () => (
    <WritePage reverse />
  ))
