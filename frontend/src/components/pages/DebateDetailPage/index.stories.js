// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { DebateDetailPage } from 'components'

storiesOf('DebateDetailPage', module)
  .add('default', () => (
    <DebateDetailPage />
  ))
