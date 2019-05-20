import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Paragraph, Link, Icon } from 'components'

const Wrapper = styled.div`
  background-color: ${palette('grayscale', 1, true)};
  padding: 2rem;
`

const Credits = styled(Paragraph)`
  vertical-align: center;
  text-align: center;
  margin: 0;
  color: grey;
`

const Footer = (props) => {
  return (
    <Wrapper {...props}>
      <Credits>
        Copyright ⓒ 2019 TalkCraft
      </Credits>
    </Wrapper>
  )
}

export default Footer
