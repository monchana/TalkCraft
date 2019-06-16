// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { YesNoDetailPage } from 'components'

storiesOf('YesNoDetailPage', module)
  .add('default', () => (
    <YesNoDetailPage />
  ))
