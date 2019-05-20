// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { RankMainPage } from 'components'

storiesOf('RankMainPage', module)
  .add('default', () => (
    <RankMainPage />
  ))
