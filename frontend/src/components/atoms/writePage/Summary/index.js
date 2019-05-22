import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Styledli = styled.li`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

const Summary = (text) => (
  <Styledli>
    {text}
    </Styledli>
)

Summary.propTypes = {
  palette: PropTypes.string,
  text: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
}

Summary.defaultProps = {
  palette: 'grayscale',
  text: "Enter Summary Here",
}

export default Summary
