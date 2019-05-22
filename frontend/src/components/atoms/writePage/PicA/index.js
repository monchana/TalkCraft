import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'


// Need to think how to input picture?
const Styledli = styled.li`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

const PicA = (image) => (
  {image}
)

PicA.propTypes = {
  palette: PropTypes.string,
  image: PropTypes.string,
  reverse: PropTypes.bool,
}

PicA.defaultProps = {
  palette: 'grayscale',
  //Need default directory to show picture
  //image: "/Some Directory",
}

export default PicA
