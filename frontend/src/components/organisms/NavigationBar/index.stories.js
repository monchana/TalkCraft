import React from 'react'
import { storiesOf } from '@storybook/react'
import { NavigationBar } from 'components'

storiesOf('NavigationBar', module)
  .add('default', () => (
    <NavigationBar />
  ))
  .add('reverse', () => (
    <NavigationBar reverse />
  ))
