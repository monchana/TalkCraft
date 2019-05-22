import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'


const Styledli = styled.li`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

const TotalTimeLimit = (time) => (
  <Styledli>
    {time}
    </Styledli>
)

TotalTimeLimit.propTypes = {
  palette: PropTypes.string,
  totaltime: PropTypes.number.isRequierd,
  reverse: PropTypes.bool,
}

TotalTimeLimit.defaultProps = {
  palette: 'grayscale',
  time: 10,
}

export default TotalTimeLimit