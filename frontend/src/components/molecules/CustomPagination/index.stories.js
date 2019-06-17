import React from 'react'
import { storiesOf } from '@storybook/react'
import { CustomPagination } from 'components'

storiesOf('CustomPagination', module)
  .add('default', () => (
    <CustomPagination>Hello</CustomPagination>
  ))
  .add('reverse', () => (
    <CustomPagination reverse>Hello</CustomPagination>
  ))
