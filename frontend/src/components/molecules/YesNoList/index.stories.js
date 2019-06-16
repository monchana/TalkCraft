import React from 'react'
import { storiesOf } from '@storybook/react'
import { YesNoList } from 'components'

storiesOf('YesNoList', module)
  .add('default', () => (
    <YesNoList>Hello</YesNoList>
  ))
  .add('reverse', () => (
    <YesNoList reverse>Hello</YesNoList>
  ))
