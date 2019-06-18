// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { YesNoWritePage } from 'components'

storiesOf('YesNoWritePage', module)
  .add('default', () => (
    <YesNoWritePage />
  ))
