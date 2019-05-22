import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const WritePage = (props) => {
  return (
    <Wrapper {...props}>content</Wrapper>
  )
}

WritePage.propTypes = {
  reverse: PropTypes.bool,
}

export default WritePage
