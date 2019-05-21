// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { DebateMainPage } from 'components'

storiesOf('DebateMainPage', module)
  .add('default', () => (
    <DebateMainPage />
  ))
