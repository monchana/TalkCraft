// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { YesNoMainPage } from 'components'

storiesOf('YesNoMainPage', module)
  .add('default', () => (
    <YesNoMainPage />
  ))
