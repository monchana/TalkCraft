import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Styledli = styled.li`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

const Title = (text) => (
  <Styledli>
    {text}
    </Styledli>
)

Title.propTypes = {
  palette: PropTypes.string,
  text: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
}

Title.defaultProps = {
  palette: 'grayscale',
  text: "Enter Title Here",
}

export default Title
