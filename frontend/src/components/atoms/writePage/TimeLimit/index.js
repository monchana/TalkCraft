import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Styledli = styled.li`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

const TimeLimit = (time) => (
  <Styledli>
    {time}
    </Styledli>
)

TimeLimit.propTypes = {
  palette: PropTypes.string,
  time: PropTypes.number.isRequierd,
  reverse: PropTypes.bool,
}

TimeLimit.defaultProps = {
  palette: 'grayscale',
  time: 10,
}

export default TimeLimit