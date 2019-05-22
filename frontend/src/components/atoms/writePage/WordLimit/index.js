import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'


const Styledli = styled.li`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

const WordLimit = (wordlimit) => (
  <Styledli>
    {wordlimitdf}
    </Styledli>
)

WordLimit.propTypes = {
  palette: PropTypes.string,
  wordlimit: PropTypes.number.isRequierd,
  reverse: PropTypes.bool,
}

WordLimit.defaultProps = {
  palette: 'grayscale',
  wordlimit: 150,
}

export default WordLimit