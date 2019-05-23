import React from 'react'
import styled from 'styled-components'

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

const MainListGroup = ({ ...props }) => (
  <div {...props}>
    <StyledHeading>Welcome to TalkCraft!</StyledHeading>
    <Description>
      Everything in your mind, Craft it in your words<br />
    </Description>
    <Grid>
      <StyledFeature
        link="/debate-main"
        title="Preparing Debate List"
      >
       <Link href="/debate-main" style={{fontFamily:"Geogia", color:"black"}}>Debate 1</Link>
       <br/>
       <Link href="/debate-main" style={{fontFamily:"Geogia", color:"black"}}>Debate 2</Link>
       <br />
       <Link href="/debate-main" style={{fontFamily:"Geogia", color:"black"}}>Debate 3</Link>
       <br/>
       <Link href="/debate-main" style={{fontFamily:"Geogia", color:"black"}}>Debate 4</Link>
       <br/>
       <Link href="/debate-main" style={{fontFamily:"Geogia", color:"black"}}>Debate 5</Link>
       <br/>
      </StyledFeature>
      <StyledFeature
        link="/debate-main"
        title="Current Debate List"
      >
        <Link href="/debate-main" style={{fontFamily:"Geogia", color:"black"}}>Debate 1</Link>
        <br/>
        <Link href="/debate-main" style={{fontFamily:"Geogia", color:"black"}}>Debate 2</Link>
        <br />
        <Link href="/debate-main" style={{fontFamily:"Geogia", color:"black"}}>Debate 3</Link>
        <br/>
        <Link href="/debate-main" style={{fontFamily:"Geogia", color:"black"}}>Debate 4</Link>
        <br/>
        <Link href="/debate-main" style={{fontFamily:"Geogia", color:"black"}}>Debate 5</Link>
        <br/>
      </StyledFeature>
      <StyledFeature
        link="/yesno-main"
        title="Current Yes/No List"
      >
        <Link href="/yesno-detail" style={{fontFamily:"Geogia", color:"black"}}>Yes No 1</Link>
        <br/>
        <Link href="/yesno-detail" style={{fontFamily:"Geogia", color:"black"}}>Yes No 2</Link>
        <br />
        <Link href="/yesno-detail" style={{fontFamily:"Geogia", color:"black"}}>Yes No 3</Link>
        <br/>
        <Link href="/yesno-detail" style={{fontFamily:"Geogia", color:"black"}}>Yes No 4</Link>
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
)

export default MainListGroup
