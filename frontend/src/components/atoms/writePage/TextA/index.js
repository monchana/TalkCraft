import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const TextA = styled.span`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

TextA.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

TextA.defaultProps = {
  palette: 'grayscale',
}

export default TextA
