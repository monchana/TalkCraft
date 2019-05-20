import React from 'react'
import { storiesOf } from '@storybook/react'
import { MainCarousel } from 'components'

storiesOf('MainCarousel', module)
  .add('default', () => (
    <MainCarousel>Hello</MainCarousel>
  ))
  .add('reverse', () => (
    <MainCarousel reverse>Hello</MainCarousel>
  ))
