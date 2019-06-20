import React, { Component } from 'react'
import styled from 'styled-components'
import { Spinner } from 'react-bootstrap'
import { Feature, Link, Heading, Paragraph } from 'components'

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  > * {
    width: calc(50% - 2rem);
    @media screen and (max-width: 640px) {
      width: 100%;
    }
  }
`

const StyledHeading = styled(Heading)`
  text-align: center;
`

const Description = styled(Paragraph)`
  text-align: center;
  margin: 2rem;
  @media screen and (max-width: 640px) {
    margin: 1rem;
  }
`

const StyledFeature = styled(Feature)`
  margin: 1rem;
  @media screen and (max-width: 640px) {
    margin: 0;
  }
`
class MainListGroup extends Component {
  constructor(){
    super()
    this.state = {
      yesnoList: null,
      loading: true
    }
  }

  componentWillMount() {
    fetch('http://localhost:8000/yesorno/write/')
    .then(response => response.json())
    .then(data => this.setState({ yesnoList: data, loading: false }))
  }

  render(){
    let mainUI = (this.state.loading) ? <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
    :
    <div>
      <StyledHeading>Welcome to TalkCraft!</StyledHeading>
      <Description>
        Everything in your mind, Craft it in your words<br />
      </Description>
      <Grid>
        <StyledFeature
          link="/debate-main"
          title="Preparing Debate List"
        >
         <Link href="/debate-detail" style={{fontFamily:"Geogia", color:"black"}}>Debate 1</Link>
         <br/>
         <Link href="/debate-detail" style={{fontFamily:"Geogia", color:"black"}}>Debate 2</Link>
         <br />
         <Link href="/debate-detail" style={{fontFamily:"Geogia", color:"black"}}>Debate 3</Link>
         <br/>
         <Link href="/debate-detail" style={{fontFamily:"Geogia", color:"black"}}>Debate 4</Link>
         <br/>
         <Link href="/debate-detail" style={{fontFamily:"Geogia", color:"black"}}>Debate 5</Link>
         <br/>
        </StyledFeature>
        <StyledFeature
          link="/debate-main"
          title="Current Debate List"
        >
          <Link href="/debate-detail" style={{fontFamily:"Geogia", color:"black"}}>Debate 1</Link>
          <br/>
          <Link href="/debate-detail" style={{fontFamily:"Geogia", color:"black"}}>Debate 2</Link>
          <br />
          <Link href="/debate-detail" style={{fontFamily:"Geogia", color:"black"}}>Debate 3</Link>
          <br/>
          <Link href="/debate-detail" style={{fontFamily:"Geogia", color:"black"}}>Debate 4</Link>
          <br/>
          <Link href="/debate-detail" style={{fontFamily:"Geogia", color:"black"}}>Debate 5</Link>
          <br/>
        </StyledFeature>
        <StyledFeature
          link="/yesno-main"
          title="Current Yes/No List"
        >
          <Link href="/yesno-detail/1" style={{fontFamily:"Geogia", color:"black"}}>{this.state.yesnoList[0].title}</Link>
          <br/>
          <Link href="/yesno-detail/2" style={{fontFamily:"Geogia", color:"black"}}>{this.state.yesnoList[1].title}</Link>
          <br />
          <Link href="/yesno-detail/3" style={{fontFamily:"Geogia", color:"black"}}>Y{this.state.yesnoList[2].title}</Link>
          <br/>
          <Link href="/yesno-detail/4" style={{fontFamily:"Geogia", color:"black"}}>{this.state.yesnoList[3].title}</Link>
          <br/>
          <Link href="/yesno-detail" style={{fontFamily:"Geogia", color:"black"}}>Yes No 5</Link>
          <br/>
        </StyledFeature>
        <StyledFeature
          link="/rank-main"
          title="Rank"
        >
          <Link href="/rank-main" style={{fontFamily:"Geogia", color:"black"}}>Rank 1</Link>
          <br/>
          <Link href="/rank-main" style={{fontFamily:"Geogia", color:"black"}}>Rank 2</Link>
          <br />
          <Link href="/rank-main" style={{fontFamily:"Geogia", color:"black"}}>Rank 3</Link>
          <br/>
          <Link href="/rank-main" style={{fontFamily:"Geogia", color:"black"}}>Rank 4</Link>
          <br/>
          <Link href="/rank-main" style={{fontFamily:"Geogia", color:"black"}}>Rank 5</Link>
          <br/>
        </StyledFeature>
      </Grid>
    </div>
    return(
      mainUI
    )
  }
}
// const MainListGroup = ({ ...props }) => (
//   <div {...props}>
//     <StyledHeading>Welcome to TalkCraft!</StyledHeading>
//     <Description>
//       Everything in your mind, Craft it in your words<br />
//     </Description>
//     <Grid>
//       <StyledFeature
//         link="/debate-main"
//         title="Preparing Debate List"
//       >
//        <Link href="/debate-detail" style={{fontFamily:"Geogia", color:"black"}}>Debate 1</Link>
//        <br/>
//        <Link href="/debate-detail" style={{fontFamily:"Geogia", color:"black"}}>Debate 2</Link>
//        <br />
//        <Link href="/debate-detail" style={{fontFamily:"Geogia", color:"black"}}>Debate 3</Link>
//        <br/>
//        <Link href="/debate-detail" style={{fontFamily:"Geogia", color:"black"}}>Debate 4</Link>
//        <br/>
//        <Link href="/debate-detail" style={{fontFamily:"Geogia", color:"black"}}>Debate 5</Link>
//        <br/>
//       </StyledFeature>
//       <StyledFeature
//         link="/debate-main"
//         title="Current Debate List"
//       >
//         <Link href="/debate-detail" style={{fontFamily:"Geogia", color:"black"}}>Debate 1</Link>
//         <br/>
//         <Link href="/debate-detail" style={{fontFamily:"Geogia", color:"black"}}>Debate 2</Link>
//         <br />
//         <Link href="/debate-detail" style={{fontFamily:"Geogia", color:"black"}}>Debate 3</Link>
//         <br/>
//         <Link href="/debate-detail" style={{fontFamily:"Geogia", color:"black"}}>Debate 4</Link>
//         <br/>
//         <Link href="/debate-detail" style={{fontFamily:"Geogia", color:"black"}}>Debate 5</Link>
//         <br/>
//       </StyledFeature>
//       <StyledFeature
//         link="/yesno-main"
//         title="Current Yes/No List"
//       >
//         <Link href="/yesno-detail" style={{fontFamily:"Geogia", color:"black"}}>Yes No 1</Link>
//         <br/>
//         <Link href="/yesno-detail" style={{fontFamily:"Geogia", color:"black"}}>Yes No 2</Link>
//         <br />
//         <Link href="/yesno-detail" style={{fontFamily:"Geogia", color:"black"}}>Yes No 3</Link>
//         <br/>
//         <Link href="/yesno-detail" style={{fontFamily:"Geogia", color:"black"}}>Yes No 4</Link>
//         <br/>
//         <Link href="/yesno-detail" style={{fontFamily:"Geogia", color:"black"}}>Yes No 5</Link>
//         <br/>
//       </StyledFeature>
//       <StyledFeature
//         link="/rank-main"
//         title="Rank"
//       >
//         <Link href="/rank-main" style={{fontFamily:"Geogia", color:"black"}}>Rank 1</Link>
//         <br/>
//         <Link href="/rank-main" style={{fontFamily:"Geogia", color:"black"}}>Rank 2</Link>
//         <br />
//         <Link href="/rank-main" style={{fontFamily:"Geogia", color:"black"}}>Rank 3</Link>
//         <br/>
//         <Link href="/rank-main" style={{fontFamily:"Geogia", color:"black"}}>Rank 4</Link>
//         <br/>
//         <Link href="/rank-main" style={{fontFamily:"Geogia", color:"black"}}>Rank 5</Link>
//         <br/>
//       </StyledFeature>
//     </Grid>
//   </div>
// )

export default MainListGroup
