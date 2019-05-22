import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const TextB = styled.span`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

TextB.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

TextB.defaultProps = {
  palette: 'grayscale',
}

export default TextB
