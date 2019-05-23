import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { YesOrNoWritePage } from 'components'

storiesOf('YesOrNoWritePage', module)
  .add('default', () => (
    <YesOrNoWritePage />
  ))
