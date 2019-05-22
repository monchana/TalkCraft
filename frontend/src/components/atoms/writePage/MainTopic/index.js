import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Styledli = styled.li`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

const MainTopic = (text) => (
  <Styledli>
    {text}
    </Styledli>
)

MainTopic.propTypes = {
  palette: PropTypes.string,
  text: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
}

MainTopic.defaultProps = {
  palette: 'grayscale',
  text: "Enter Main Topic Here",
}

export default MainTopic
