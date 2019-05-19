import React from 'react'
import { storiesOf } from '@storybook/react'
import ControlledTabs from '.'

storiesOf('ControlledTabs', module)
  .add('default', () => (
    <ControlledTabs>Hello</ControlledTabs>
  ))
  .add('reverse', () => (
    <ControlledTabs reverse>Hello</ControlledTabs>
  ))
